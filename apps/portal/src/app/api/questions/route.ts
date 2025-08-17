import { connectDb } from "@ivalo/db";
import { QuestionsRepository } from "../../_repositories/questions.repository.js";

export async function GET() {
  const { db } = await connectDb();
  const companyRepo = new QuestionsRepository(db);

  const categories = await companyRepo.getQuestions();
  return Response.json(categories);
}
