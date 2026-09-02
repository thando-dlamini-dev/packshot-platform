import {integer, pgEnum, pgTable, uuid, varchar} from "drizzle-orm/pg-core";

const isActive = pgEnum("is_active", ["active", "inactive"])

const discountCodes = pgTable("discount_codes", {
    id: uuid("id").notNull().unique().defaultRandom(),
    discountCode: varchar("discount_code", { length: 255 }).notNull().unique(),
    status: isActive("status").default("active").notNull(),
    multiplier: integer("multiplier").notNull().unique(),
})

export default discountCodes