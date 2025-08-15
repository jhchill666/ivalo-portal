import { z } from "zod";

export const dbSchema = z.object({
  SUPABASE_URL: z.string(),
  SUPABASE_ANON_KEY: z.string(),
  DB_CONNECTION_STRING: z.coerce.string(),
});

export const env = dbSchema.parse(process.env);
