import process from "node:process";
import pg from "pg";

const { Pool } = pg;

let pool: pg.Pool | undefined;

export function getDbPool() {
  pool ??= new Pool(
    process.env.DATABASE_URL
      ? {
          connectionString: process.env.DATABASE_URL,
          ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined,
        }
      : {
          host: process.env.PGHOST ?? "localhost",
          port: Number(process.env.PGPORT ?? 5432),
          database: process.env.PGDATABASE ?? "website",
          user: process.env.PGUSER ?? "postgres",
          password: process.env.PGPASSWORD,
          ssl: process.env.PGSSL === "true" ? { rejectUnauthorized: false } : undefined,
        },
  );

  return pool;
}
