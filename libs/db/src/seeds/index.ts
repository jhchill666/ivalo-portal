import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../config/env.js";
import {
  companies,
  companyQuestionScores,
  questionScoring,
} from "../schema/company.schema.js";
import { schema } from "../schema/index.js";
import {
  questionCategories,
  questionOptions,
  questions,
} from "../schema/questions.schema.js";
import { companySeed } from "./companies.js";
import { companyQuestionScoresSeed } from "./companyQuestionScores.js";
import { categorySeed } from "./question_categories.js";
import { questionOptionsSeed } from "./question_options.js";
import { questionScoringSeed } from "./question_scoring.js";
import { questionSeed } from "./questions.js";

async function main() {
  const sql = postgres(env.DB_CONNECTION_STRING, { ssl: "require", max: 1 });
  const db = drizzle(sql, { schema });

  await db.transaction(async (tx) => {
    // Companies
    await tx.insert(companies).values(companySeed);

    // Questions
    await tx
      .insert(questionCategories)
      .values(categorySeed)
      .onConflictDoNothing({ target: questionCategories.code });

    await tx.insert(questions).values(questionSeed);
    await tx.insert(questionOptions).values(questionOptionsSeed);

    // Scoring
    await tx
      .insert(companyQuestionScores)
      .values(
        companyQuestionScoresSeed.filter(
          (score) =>
            questionSeed.find((q) => q.code === score.questionCode) &&
            questionOptionsSeed.find(
              (o) => o.questionCode === score.questionCode
            )
        )
      );

    await tx
      .insert(questionScoring)
      .values(
        questionScoringSeed.filter(
          (score) =>
            questionSeed.find((q) => q.code === score.code) &&
            questionOptionsSeed.find((o) => o.questionCode === score.code)
        )
      );
  });

  await sql.end();
  console.log("✅ Seed completed.");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
