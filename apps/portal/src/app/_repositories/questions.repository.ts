import { DrizzleDatabase, QuestionCategoryWithQuestions } from "@ivalo/db";

export class QuestionsRepository {
  constructor(private readonly db: DrizzleDatabase) {}

  async getQuestions(): Promise<QuestionCategoryWithQuestions[]> {
    try {
      const result = await this.db.query.questionCategories.findMany({
        orderBy: (categories, { asc }) => [asc(categories.code)],
        columns: {
          id: true,
          code: true,
          title: true,
        },
        with: {
          questions: true,
        },
      });

      console.debug("Questions loaded successfully.");
      return result;
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
