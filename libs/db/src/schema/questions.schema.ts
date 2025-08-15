import { relations } from "drizzle-orm";
import {
  integer,
  serial,
  pgTable as table,
  text,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Question Categories
 */
export const questionCategories = table("question_categories", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 16 }).notNull(),
  title: text("title").notNull(),
});

/**
 * Questions
 */
export const questions = table("questions", {
  id: serial("id").primaryKey().unique(),
  code: varchar("code", { length: 32 }).notNull(),
  categoryId: integer("category_id")
  .notNull()
  .references(() => questionCategories.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
  scoreMin: integer("score_min").notNull().default(0),
  scoreMax: integer("score_max").notNull().default(0),
});

export const questionCategoriesRelations = relations(
  questionCategories,
  ({ many }) => ({
    questions: many(questions),
  })
);

export const questionsRelations = relations(questions, ({ one }) => ({
  category: one(questionCategories, {
    fields: [questions.categoryId],
    references: [questionCategories.id],
  }),
}));
