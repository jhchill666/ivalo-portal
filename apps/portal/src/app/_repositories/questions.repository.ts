import {
  DrizzleDatabase,
  QuestionCategory,
  QuestionCategoryWithQuestions,
} from "@ivalo/db";

export class QuestionsRepository {
  constructor(private readonly db: DrizzleDatabase) {}

  async getCategories(): Promise<QuestionCategory[]> {
    try {
      const results = await this.db.query.questionCategories.findMany();

      return results;
    } catch (err: unknown) {
      console.error(
        {
          err,
          errorMessage: (err as { message: string })?.message,
        },
        "Failed to load questions."
      );
      throw err;
    }
  }

  async getQuestions(): Promise<QuestionCategoryWithQuestions[]> {
    try {
      const results = await this.db.query.questionCategories.findMany({
        orderBy: (categories, { asc }) => [asc(categories.code)],
        columns: {
          code: true,
          text: true,
        },
        with: {
          questions: {
            with: {
              options: true,
            },
          },
        },
      });

      console.debug("Questions loaded successfully.");
      return results;
    } catch (err: unknown) {
      console.error(
        {
          err,
          errorMessage: (err as { message: string })?.message,
        },
        "Failed to load questions."
      );
      throw err;
    }
  }
}
