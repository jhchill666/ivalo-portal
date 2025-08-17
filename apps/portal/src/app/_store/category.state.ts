import {
  QuestionCategoryWithQuestions,
  QuestionOption,
  QuestionWithOptions,
} from "@ivalo/db";
import { proxy } from "valtio";
import { validateCategories } from "./category.utils";

interface CategoryState {
  categories: QuestionCategoryWithQuestions[];
  category: QuestionCategoryWithQuestions | undefined;
  question?: QuestionWithOptions | undefined;
  categoryIndex: number;
  questionIndex: number;
  selectedOption: QuestionOption | undefined;

  remainingCategories: QuestionCategoryWithQuestions[];
  completedCategories: QuestionCategoryWithQuestions[];

  remainingQuestions: QuestionWithOptions[];
  completedQuestions: QuestionWithOptions[];

  hydrateCategories: (categories: QuestionCategoryWithQuestions[]) => void;
  previousQuestion: () => void;
  nextQuestion: () => void;

  loading: boolean;
  loaded: boolean;
}

export const categoryState = proxy<CategoryState>({
  categories: [],
  category: undefined,
  categoryIndex: 0,
  question: undefined,
  questionIndex: 0,
  selectedOption: undefined,

  remainingCategories: [],
  remainingQuestions: [],
  completedCategories: [],
  completedQuestions: [],

  loading: true,
  loaded: false,

  hydrateCategories(categories: QuestionCategoryWithQuestions[]) {
    categoryState.categories = validateCategories(categories);
    categoryState.category = categoryState.categories[0];
    categoryState.question = categoryState.category?.questions[0];
    categoryState.categoryIndex = 0;
    categoryState.questionIndex = 0;

    updateRemaining();
  },

  nextQuestion() {
    const questions = categoryState.category
      ?.questions as QuestionWithOptions[];

    if (categoryState.questionIndex < questions?.length - 1) {
      categoryState.questionIndex++;
      categoryState.question =
        categoryState.category?.questions[categoryState.questionIndex];
    } else {
      if (categoryState.categoryIndex < categoryState.categories.length - 1) {
        categoryState.categoryIndex++;
        categoryState.category =
          categoryState.categories[categoryState.categoryIndex];
        categoryState.question = categoryState.category?.questions[0];
        categoryState.questionIndex = 0;
      } else {
        // finished
      }
    }

    categoryState.selectedOption = undefined;
    window?.scrollTo({ top: 0, behavior: "smooth" });
    updateRemaining();
  },

  previousQuestion() {
    if (categoryState.questionIndex > 0) {
      categoryState.questionIndex--;
      categoryState.question =
        categoryState.category?.questions[categoryState.questionIndex];
    } else {
      if (categoryState.categoryIndex > 0) {
        categoryState.categoryIndex--;
        categoryState.category =
          categoryState.categories[categoryState.categoryIndex];
        categoryState.question = categoryState.category?.questions[-1];
        categoryState.questionIndex =
          categoryState.category?.questions?.length ?? 0;
      } else {
        // finished
      }
    }

    categoryState.selectedOption = undefined;
    window?.scrollTo({ top: 0, behavior: "smooth" });
    updateRemaining();
  },
});

const updateRemaining = () => {
  categoryState.completedCategories = categoryState.categories.slice(
    0,
    categoryState.categoryIndex + 1
  );
  categoryState.remainingCategories = categoryState.categories.slice(
    categoryState.categoryIndex + 1
  );

  categoryState.completedQuestions = categoryState.category?.questions.slice(
    0,
    categoryState.questionIndex + 1
  ) as QuestionWithOptions[];
  categoryState.remainingQuestions = categoryState.category?.questions.slice(
    categoryState.questionIndex + 1
  ) as QuestionWithOptions[];
};
