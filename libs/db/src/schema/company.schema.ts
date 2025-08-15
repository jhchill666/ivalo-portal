import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  numeric,
  primaryKey,
  pgTable as table,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { questions } from "./questions.schema.js";

/**
 * Companies
 * - tulosPoints = 360 score points total (sum of per-question points)
 * - tulosPercent = (tulosPoints / MAX_TOTAL) * 100  (you computed MAX_TOTAL=119)
 */
export const companies = table(
  "companies",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull().unique(),
    tulosPoints: numeric("tulos_points", { precision: 10, scale: 2 }).notNull(),
    tulosPercent: numeric("tulos_percent", {
      precision: 6,
      scale: 2,
    }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .default(sql`now()`),
  },
  (t) => [index("companies_name_idx").on(t.name)]
);

/**
 * Company answers (one row per company per question)
 */
export const companyAnswers = table(
  "company_answers",
  {
    companyId: uuid("company_id")
      .notNull()
      .references(() => companies.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    questionId: integer("question_id")
      .notNull()
      .references(() => questions.id, {
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
    points: numeric("points", { precision: 10, scale: 2 }).notNull(),
  },
  (t) => [
    primaryKey({
      name: "company_answers_pkey",
      columns: [t.companyId, t.questionId],
    }),
    index("company_answers_company_idx").on(t.companyId),
    index("company_answers_question_idx").on(t.questionId),
  ]
);

export const companyRelations = relations(companies, ({ many }) => ({
  answers: many(companyAnswers),
}));

export const companyAnswerRelations = relations(companyAnswers, ({ one }) => ({
  company: one(companies, {
    fields: [companyAnswers.companyId],
    references: [companies.id],
  }),
  question: one(questions, {
    fields: [companyAnswers.questionId],
    references: [questions.id],
  }),
}));
