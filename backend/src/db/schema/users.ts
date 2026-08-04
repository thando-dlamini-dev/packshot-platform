import {pgEnum, pgTable, serial, varchar} from "drizzle-orm/pg-core"
import { timestamps } from "../columns.helpers";

export const roleEnum = pgEnum("role", ["customer", "admin", "tester"]);

const users = pgTable("users", {
    id: serial().primaryKey(),//database id

    //Google  Oauth Identifiers
    googleId: varchar("google_id", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull().unique(),

    //User Profile Info
    userName: varchar("username", { length: 255 }),
    businessName: varchar("business_name", { length: 255 }).unique(),
    avatarUrl: varchar("avatar_url", { length: 255 }),

    role: roleEnum("role").default("customer"),

    ...timestamps
})

export default users;