"use client";

import { QuestionCategoryWithQuestions } from "@ivalo/db";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { categoryState, Tab } from "../../_store/category.state.js";
import { Company } from "./company/company.js";
import { Questions } from "./questions/questions.js";

export function Questionnaire({
  categories,
  tab: initialTab,
}: {
  categories: QuestionCategoryWithQuestions[];
  tab: Tab;
}) {
  const { tab } = useSnapshot(categoryState);

  useEffect(() => {
    categoryState.hydrateCategories(categories, initialTab);
  }, [categoryState, categories]);

  return (
    <div className="min-h-screen">
      <div role="tablist" className="tabs tabs-border">
        <input
          aria-label="Company"
          type="radio"
          name="my_tabs_2"
          className="tab"
          checked={tab === "company"}
          onChange={() => (categoryState.tab = "company")}
        />
        <div className="tab-content">
          <Company />
        </div>

        <input
          aria-label="Questions"
          type="radio"
          name="my_tabs_2"
          className="tab"
          checked={tab === "questions"}
          onChange={() => (categoryState.tab = "questions")}
        />
        <div className="tab-content">
          <Questions />
        </div>
      </div>
    </div>
  );
}
