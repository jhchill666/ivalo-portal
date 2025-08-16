import { relations } from "drizzle-orm";
import {
  doublePrecision,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import { questions } from "./questions.schema.js";

export const priorityEnum = pgEnum("priority", ["LOW", "MEDIUM", "HIGH"]);
export const requirementEnum = pgEnum("requirement", ["Minimum", "Maximum"]);

export const companies = pgTable("companies", {
  code: varchar("code", { length: 32 }).primaryKey().unique(),
  name: text("name").notNull(),

  priority: varchar("priority", { length: 8 }),
  country: varchar("country", { length: 8 }),

  tulosPercent: doublePrecision("tulos_percent"),
  tulosPoints: doublePrecision("tulos_points"),
  janallaPercent: doublePrecision("janalla_percent"),
});

export const companyQuestionScores = pgTable(
  "company_question_scores",
  {
    code: varchar("company_code", { length: 32 })
      .notNull()
      .references(() => companies.code, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    questionCode: varchar("question_code", { length: 8 })
      .notNull()
      .references(() => questions.code, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),

    score: doublePrecision("score").notNull(),
    maxPoints: doublePrecision("max_points").notNull().default(0),
    priority: priorityEnum("priority").notNull().default("LOW"),
    requirement: requirementEnum("requirement").notNull().default("Minimum"),
  },
  (t) => [
    primaryKey({
      columns: [t.code, t.questionCode],
      name: "pk_company_question",
    }),
  ]
);

export const questionScoring = pgTable("question_scoring", {
  code: varchar("question_code", { length: 8 })
    .primaryKey()
    .references(() => questions.code, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),

  maxPoints: doublePrecision("max_points").notNull().default(0),
  priority: priorityEnum("priority").notNull().default("LOW"),
  requirement: requirementEnum("requirement"),
});

export const companiesRelations = relations(companies, ({ many }) => ({
  answers: many(companyQuestionScores),
}));

export const companyQuestionScoresRelations = relations(
  companyQuestionScores,
  ({ one }) => ({
    company: one(companies, {
      fields: [companyQuestionScores.code],
      references: [companies.code],
    }),
    question: one(questions, {
      fields: [companyQuestionScores.questionCode],
      references: [questions.code],
    }),
  })
);

export const questionScoringRelations = relations(
  questionScoring,
  ({ one }) => ({
    question: one(questions, {
      fields: [questionScoring.code],
      references: [questions.code],
    }),
  })
);
