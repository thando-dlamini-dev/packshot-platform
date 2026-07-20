import {pgEnum, pgTable, serial, integer, text, varchar, timestamp} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";
import orders from "./orders"

const resolutionEnum = pgEnum("resolution_enum", ["1920x1080", "3840x2160"])

const deliverables = pgTable("", {
    id: serial().primaryKey(),
    orderId: integer("order_id").notNull().references(() => orders.publicId, { onDelete: "cascade" }),
    name: varchar("name").notNull().unique(),
    imgUrl: varchar("imgUrl").notNull().unique(),
    resolution: resolutionEnum("resolution").notNull(),
    deliveredAt: timestamp("delivered_at").defaultNow(),
    ...timestamps
})

export default deliverables;
