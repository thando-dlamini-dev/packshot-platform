import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import dotenv from "dotenv";


const client = postgres(process.env.SUPABASE_DATABASE_URL!, { prepare: false })
const db = drizzle({ client });

export default db;