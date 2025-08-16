import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  companies,
  companyQuestionScores,
  questionScoring,
} from "../schema/company.schema.js";

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = InferInsertModel<typeof companies>;

export type CompanyQuestionScore = InferSelectModel<
  typeof companyQuestionScores
>;

export type QuestionScoring = InferSelectModel<typeof questionScoring>;
