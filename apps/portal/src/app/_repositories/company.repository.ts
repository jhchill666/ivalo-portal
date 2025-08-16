import { Company, DrizzleDatabase } from "@ivalo/db";

export class CompanyRepository {
  constructor(private readonly db: DrizzleDatabase) {}

  async getCompanies(limit = 999): Promise<Company[]> {
    try {
      const result = await this.db.query.companies.findMany({
        orderBy: (companies, { asc }) => [asc(companies.name)],
        limit,
      });

      console.debug("Companies loaded successfully.");
      return result;
    } catch (err: unknown) {
      console.error(
        {
          err,
          errorMessage: (err as { message: string })?.message,
        },
        "Failed to load companies."
      );
      throw err;
    }
  }

  async getCompany(companyCode: string): Promise<Company | undefined> {
    try {
      const result = await this.db.query.companies.findFirst({
        where: (companies, { eq }) => eq(companies.code, companyCode),
      });

      console.debug("Company loaded successfully.");
      return result;
    } catch (err: unknown) {
      console.error(
        {
          err,
          errorMessage: (err as { message: string })?.message,
        },
        "Failed to load companies."
      );
      throw err;
    }
  }
}
