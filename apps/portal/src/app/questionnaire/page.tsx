import { QuestionCategoryWithQuestions } from "@ivalo/db";
import { Tab } from "../_store/category.state.js";
import { Questionnaire } from "./_components/questionnaire.js";

export const dynamic = "force-static";

export default async function Index({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  const { tab = "company" } = await searchParams;
  const res = await fetch(
    `${process.env["NEXT_PUBLIC_SITE_URL"]}/api/questions`,
    {
      next: { revalidate: 3600 },
    }
  );

  const categories = (await res.json()) as QuestionCategoryWithQuestions[];

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
