import { Company, DrizzleDatabase } from "@ivalo/db";

export class CompanyRepository {
  constructor(private readonly db: DrizzleDatabase) {}

  async getCompanies(): Promise<Company[]> {
    try {
      const result = await this.db.query.companies.findMany({
        orderBy: (companies, { asc }) => [asc(companies.name)],
        columns: {
          id: true,
          name: true,
          tulosPoints: true,
          tulosPercent: true,
          createdAt: true,
        },
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
}
