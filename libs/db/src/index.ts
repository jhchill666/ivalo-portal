// Database client and connection
// Schema and tables

import { createClient } from "@supabase/supabase-js";
import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "./config/env.js";
import { schema } from "./schema/index.js";

export type DrizzleClient = postgres.Sql<Record<string, postgres.PostgresType>>;
export type DrizzleDatabase = PostgresJsDatabase<typeof schema>;

export type DrizzleConnection = {
  db: DrizzleDatabase;
  client: DrizzleClient;
};

// Supabase client for client-side operations
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);

// Postgres connection for server-side operations
export async function connectDb(): Promise<DrizzleConnection> {
  const client = postgres(env.DB_CONNECTION_STRING, {
    // Keep connection count low for Lambda
    max: 1,
    // Optional: disconnect if idle for 10s
    idle_timeout: 10,
    // RDS Proxy requires SSL
    ssl: { rejectUnauthorized: false },
  });

  const db = drizzle(client, {
    casing: "snake_case",
    schema,
  });

  process.on("SIGINT", () => {
    client.end();
    process.exit(0);
  });

  process.on("SIGTERM", () => {
    client.end();
    process.exit(0);
  });

  return {
    db,
    client,
  };
}

export * from "./types/index.js";
