import { QuestionCategoryWithQuestions, QuestionWithOptions } from "@ivalo/db";

export const groupQuestions = (questions: QuestionWithOptions[]) => {
  return questions.reduce((acc, q) => {
    const topLevel = q.code.split("-")[0] as string;
    if (!acc[topLevel]) acc[topLevel] = [];
    acc[topLevel].push(q);
    return acc;
  }, {} as Record<string, QuestionWithOptions[]>);
};

export const toDotNotation = (code?: string) => {
  return code?.replace(/-/g, ".");
};

export const validateCategories = (
  categories: QuestionCategoryWithQuestions[]
): QuestionCategoryWithQuestions[] => {
  return categories.map((c) => {
    const questions = c.questions.filter((q) => q.options.length > 0);
    return { ...c, questions };
  });
};

export const percentDone = (total: number, remaining: number): number => {
  if (total <= 0) return 0; // avoid divide by zero
  return ((total - remaining - 1) / total) * 100;
};
