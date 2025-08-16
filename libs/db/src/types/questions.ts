import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  questionCategories,
  questionOptions,
  questions,
} from "../schema/questions.schema.js";

export type QuestionCategory = InferSelectModel<typeof questionCategories>;

export type Question = InferSelectModel<typeof questions>;
export type QuestionWithOptions = Question & { options: QuestionOption[] };

export type QuestionOption = InferSelectModel<typeof questionOptions>;
export type NewQuestionOption = InferInsertModel<typeof questionOptions>;

export type QuestionCategoryWithQuestions = QuestionCategory & {
  questions: QuestionWithOptions[];
};
