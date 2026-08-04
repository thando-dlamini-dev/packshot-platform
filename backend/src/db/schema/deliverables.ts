import {pgEnum, pgTable, serial, integer, varchar, timestamp, uuid} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";
import orders from "./orders"

export const resolutionEnum = pgEnum("resolution_enum", ["1920x1080", "3840x2160"])

const deliverables = pgTable("deliverables", {
    id: serial().primaryKey(),
    orderId: uuid("order_id").notNull().references(() => orders.orderId, { onDelete: "cascade" }),
    name: varchar("name", { length: 255 }).notNull().unique(),
    imgUrl: varchar("imgUrl", { length: 500 }).notNull().unique(),
    resolution: resolutionEnum("resolution").notNull(),
    deliveredAt: timestamp("delivered_at").defaultNow(),
    ...timestamps
})

export default deliverables;
