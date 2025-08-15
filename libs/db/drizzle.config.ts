import { defineConfig } from "drizzle-kit";
import { z } from "zod";

export const env = z
  .object({ DB_CONNECTION_STRING: z.string() })
  .parse(process.env);

export default defineConfig({
  out: "./src/migrations",
  dialect: "postgresql",
  schema: [
    "./src/schema/company.schema.ts",
    "./src/schema/questions.schema.ts",
  ],

  dbCredentials: {
    url: env.DB_CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  },

  casing: "snake_case",
  verbose: true,
  strict: true,
});
