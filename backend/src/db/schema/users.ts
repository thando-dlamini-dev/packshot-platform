import { pgTable, serial, varchar } from "drizzle-orm/pg-core"

const users = pgTable("users", {
    id: serial().primaryKey(),
    userName: varchar("user_name"),
})