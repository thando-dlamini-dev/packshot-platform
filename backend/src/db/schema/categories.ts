import {boolean, pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

const categories = pgTable("categories", {
    id: serial().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    isActive: boolean("is_active").notNull().default(false),
    ...timestamps
})

export default categories;