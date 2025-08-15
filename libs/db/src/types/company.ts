import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { companies, companyAnswers } from "../schema/company.schema.js";

export type Company = InferSelectModel<typeof companies>;
export type NewCompany = InferInsertModel<typeof companies>;

export type CompanyAnswer = InferSelectModel<typeof companyAnswers>;
export type NewCompanyAnswer = InferInsertModel<typeof companyAnswers>;
