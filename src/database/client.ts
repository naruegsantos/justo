// src/database/client.ts

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL ausente no runtime");
}

export const client = postgres(databaseUrl, {
  prepare: false,
  max: 1,
  connect_timeout: 10,
});

export const db = drizzle(client);