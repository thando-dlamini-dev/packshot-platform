import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import dotenv from "dotenv";

dotenv.config();

const client = postgres(process.env.SUPABASE_DATABASE_URL!, { prepare: false, ssl: { rejectUnauthorized: false } }, )
const db = drizzle({ client });

export default db;