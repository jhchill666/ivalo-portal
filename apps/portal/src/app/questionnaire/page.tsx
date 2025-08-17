import { connectDb } from "@ivalo/db";
import { QuestionsRepository } from "../_repositories/questions.repository.js";
import { Tab } from "../_store/category.state.js";
import { Questionnaire } from "./_components/questionnaire.js";

export const dynamic = "force-static";

export default async function Index({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  const { db } = await connectDb();
  const { tab = "company" } = await searchParams;

  const repo = new QuestionsRepository(db);
  const categories = await repo.getQuestions();

  if (!categories) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              Error Loading Category
            </h1>
            <p className="text-red-700">
              Failed to load category questions. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Questionnaire categories={categories} tab={tab as Tab} />
    </div>
  );
}
