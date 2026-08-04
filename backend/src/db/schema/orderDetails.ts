import {integer, pgTable, text, uuid} from "drizzle-orm/pg-core";
import orders from "./orders";
import {timestamps} from "../columns.helpers";

const orderDetails = pgTable("order_details", {
    id: uuid("id").defaultRandom().notNull().unique(),
    orderId: uuid("order_id").notNull().references(() => orders.orderId, {onDelete: "cascade"}),

    //Product Dimensions
    widthMm: integer("width_mm"),
    heightMm: integer("height_mm"),
    depthMM: integer("depth_mm"),

    //Top, Side & Front view images of the product
    referenceImages: text("reference_images").array().notNull(),

    //Logos, Labels and product info images
    artworkFiles: text("artwork_files").array(),

    // Creative preferences
    backgroundStyle: text("background_style").default("transparent"), // white, dark, transparent
    materialNotes: text("material_notes"),

    ...timestamps
})

export default orderDetails;