import { QuestionWithOptions } from "@ivalo/db";

export const groupQuestions = (questions: QuestionWithOptions[]) => {
  return questions.reduce((acc, q) => {
    const topLevel = q.code.split("-")[0] as string;
    if (!acc[topLevel]) acc[topLevel] = [];
    acc[topLevel].push(q);
    return acc;
  }, {} as Record<string, QuestionWithOptions[]>);
};

export const toDotNotation = (code?: string) => {
  return code?.replace(/-/g, ".") + ".";
};
