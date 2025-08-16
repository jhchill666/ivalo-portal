import { connectDb } from "@ivalo/db";
import { QuestionsRepository } from "../_repositories/questions.repository.js";
import { Questions } from "./_components/questions.jsx";

export const dynamic = "force-dynamic";

export default async function Index() {
  const { db } = await connectDb();

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
      <div role="tablist" className="tabs tabs-border">
        <input
          aria-label="Questions"
          type="radio"
          name="my_tabs_2"
          className="tab"
          defaultChecked
        />
        <div className="tab-content">
          <Questions categories={categories} />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Overview"
        />
        <div className="tab-content">Tab content 2</div>
      </div>
    </div>
  );
}
