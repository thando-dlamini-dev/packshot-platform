import {pgTable, uuid, pgEnum, integer} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";
import {serial} from "drizzle-orm/pg-core";
import categories from "./categories";
import users from "./users";

export const statusEnum = pgEnum("status_enum", [
    "pending_payment",
    "reviewing_assets",
    "modeling",
    "rendering",
    "completed",
    "rejected"
]);

export const statusLookup = {
    pending_payment: {
        label: "Pending Payment",
        description: "We are waiting for your payment transaction to clear before starting your project."
    },
    reviewing_assets: {
        label: "Reviewing Reference Photos",
        description: "Our design team is checking your uploaded product photos to ensure we have enough detail to build the 3D model."
    },
    modeling: {
        label: "Creating 3D Model",
        description: "A 3D artist is actively building a highly accurate digital replica of your physical product."
    },
    rendering: {
        label: "Generating Studio Packshot",
        description: "Our digital cameras and lighting rigs are rendering your high-resolution final marketing images."
    },
    completed: {
        label: "Ready for Download",
        description: "Your professional product renders are complete! You can view and download them now."
    },
    rejected: {
        label: "Action Required",
        description: "We could not process this order. The uploaded photos were blurry, low resolution, or missing key angles."
    }
} as const;

const orders = pgTable("orders", {
    publicId: uuid('public_id').defaultRandom().notNull().unique(),
    userId: integer().notNull().unique().references(() => users.id),
    categoryId: integer("category_id").notNull().references(() => categories.id, { onDelete: "restrict" }),
    status: statusEnum("status"),
    ...timestamps
})

export default orders