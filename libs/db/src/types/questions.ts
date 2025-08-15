import { InferSelectModel } from "drizzle-orm";
import { questionCategories, questions } from "../schema/questions.schema.js";

// Base table types
export type QuestionCategory = InferSelectModel<typeof questionCategories>;
export type Question = InferSelectModel<typeof questions>;

// Nested return type
export type QuestionCategoryWithQuestions = QuestionCategory & {
  questions: Question[];
};
