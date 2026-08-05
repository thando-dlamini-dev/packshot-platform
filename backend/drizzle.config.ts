import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema/*.ts",
    out: "./drizzle",
    schemaFilter: ["public"],
    extensionsFilters: ["pg_stat_statements" as any],
    dbCredentials: {
        url: process.env.SUPABASE_DATABASE_URL!,
    },
});


