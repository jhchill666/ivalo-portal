import { connectDb } from "@ivalo/db";
import { QuestionsRepository } from "../_repositories/questions.repository";

export default async function PromptsPage() {
  const { db } = await connectDb();
  const questionsRepo = new QuestionsRepository(db);

  try {
    const categoriesWithQuestions = await questionsRepo.getQuestions();

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Assessment Questions
          </h1>

          <div className="space-y-6">
            {categoriesWithQuestions.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category.code} {category.title}
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {category.questions?.map((question) => (
                    <div key={question.id} className="px-6 py-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {question.code} {question.text}
                          </h3>
                          <div className="text-sm text-gray-600 mt-1">
                            Score range: {question.scoreMin} -{" "}
                            {question.scoreMax}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load questions:", error);
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              Error Loading Questions
            </h1>
            <p className="text-red-700">
              Failed to load assessment questions. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
