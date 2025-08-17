"use client";

import { QuestionCategoryWithQuestions } from "@ivalo/db";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { categoryState } from "../../_store/category.state.js";
import { QuestionItem } from "./question.item.jsx";

export function Questions({
  categories,
}: {
  categories: QuestionCategoryWithQuestions[];
}) {
  const {
    category,
    question,
    categoryIndex,
    completedQuestions,
    questionIndex,
    remainingQuestions,
    selectedOption,
  } = useSnapshot(categoryState);

  useEffect(() => {
    categoryState.hydrateCategories(categories);
  }, [categoryState, categories]);

  return (
    <div className="divide-y divide-gray-100">
      <div className="space-y-6">
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 font-display">
                {category?.code}. {category?.text}
              </h1>
            </div>

            <div className="divide-y divide-gray-100">
              <div className="space-y-6">
                {question && (
                  <QuestionItem
                    key={question?.code}
                    question={question as any}
                  />
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                className="btn btn-xl font-display flex-1"
                onClick={() => categoryState.previousQuestion()}
                disabled={
                  remainingQuestions.length === 0 ||
                  (categoryIndex === 0 && questionIndex === 0)
                }
              >
                Previous Question
              </button>
              <button
                className="btn btn-success btn-xl flex-1 font-display bg-green-300"
                onClick={() => categoryState.nextQuestion()}
                disabled={completedQuestions.length === 0 || !selectedOption}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
