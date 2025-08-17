import { connectDb } from "@ivalo/db";
import { CompanyRepository } from "../../_repositories/company.repository.js";

export async function GET() {
  const { db } = await connectDb();
  const companyRepo = new CompanyRepository(db);

  const companies = await companyRepo.getCompanies(999);
  return Response.json(companies);
}
