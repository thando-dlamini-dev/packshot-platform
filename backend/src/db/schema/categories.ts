import {boolean, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

const categories = pgTable("categories", {
    id: serial().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(true),
    ...timestamps
})

export default categories;