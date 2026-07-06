import {pgTable, bigint, uuid, pgEnum} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

// 1. Database gets clean, short, unchangeable keys (max efficiency)
export const statusEnum = pgEnum("status", [
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
    id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
    publicId: uuid('public_id').defaultRandom().notNull().unique(),
    status: statusEnum("status"),
    ...timestamps
})