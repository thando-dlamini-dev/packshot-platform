import {pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

const portfolio = pgTable("portfolio", {
    id: serial().notNull().unique(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    description: varchar("description", { length: 255 }).notNull().unique(),
    imgUrl: varchar("img_url", { length: 255 }).notNull().unique(),
    ...timestamps
});

export default portfolio;