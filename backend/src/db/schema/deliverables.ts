import {pgEnum, pgTable, serial, text, varchar} from "drizzle-orm/pg-core";

const resolutionEnum =  pgEnum("resolution_enum", ["1920x1080", "3840x2160"])

const deliverables = pgTable("", {
    id: serial().primaryKey(),
    name: varchar("name").notNull().unique(),
    description: text("description").notNull(),
    imgUrl: varchar("imgUrl").notNull().unique(),
    resolution: varchar("resolution").notNull().unique(),
})

export default deliverables;
