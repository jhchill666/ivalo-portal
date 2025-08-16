import { relations } from "drizzle-orm";
import {
  index,
  pgEnum,
  pgTable,
  serial,
  text,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

// ---------- Enums ----------
export const choiceModeEnum = pgEnum("choice_mode", ["single", "multiple"]);
export const extraInfoTypeEnum = pgEnum("extra_info_type", [
  "text",
  "url",
  "none",
]);

// ---------- Tables ----------

// categories.json => { code: "1".."7", text }
export const questionCategories = pgTable("question_categories", {
  code: varchar("code", { length: 8 }).primaryKey().unique(),
  text: text("text").notNull(),
});

// questions.json => { code: "1-1", category_code: "1", text, choice_mode, info? }
export const questions = pgTable(
  "questions",
  {
    // "1-1", "1-3-2", etc.
    code: varchar("code", { length: 8 }).primaryKey().unique(),
    categoryCode: varchar("category_code", { length: 8 })
      .notNull()
      .references(() => questionCategories.code, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    text: text("text").notNull(),
    choiceMode: choiceModeEnum("choice_mode").notNull().default("single"),
    info: text("info"),
  },
  (t) => [index("idx_questions_category").on(t.categoryCode)]
);

// options.json => { question_code: "1-1", text, additional_info_type, info? }
export const questionOptions = pgTable(
  "question_options",
  {
    id: serial("id").primaryKey(),
    questionCode: varchar("question_code", { length: 8 })
      .notNull()
      .references(() => questions.code, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    text: text("text").notNull(),
    // Optional display note for this option (from Column H); absent if not present
    info: text("info"),
    additionalInfoType: extraInfoTypeEnum("additional_info_type")
      .notNull()
      .default("none"),
  },
  (t) => [
    // Prevent duplicate labels for the same question
    unique("uq_question_option_by_text").on(t.questionCode, t.text),
    index("idx_question_options_question").on(t.questionCode),
  ]
);

// ---------- Relations ----------

export const questionCategoriesRelations = relations(
  questionCategories,
  ({ many }) => ({
    questions: many(questions),
  })
);

export const questionsRelations = relations(questions, ({ one, many }) => ({
  category: one(questionCategories, {
    fields: [questions.categoryCode],
    references: [questionCategories.code],
  }),
  options: many(questionOptions),
}));

export const questionOptionsRelations = relations(
  questionOptions,
  ({ one }) => ({
    question: one(questions, {
      fields: [questionOptions.questionCode],
      references: [questions.code],
    }),
  })
);
