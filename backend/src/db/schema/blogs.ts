import {pgEnum, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

export const postStatusEnum = pgEnum("post_status", ["draft", "published", "archived"]);

const blogs = pgTable("blogs",  {
    id: serial().primaryKey(),
    title: varchar("title", { length: 255 }).notNull().unique(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    content: text("content").notNull(),
    summary: text("summary").notNull(),
    status: postStatusEnum("status").default("draft"),
    imgUrl: varchar("img_url", { length: 500 }),
    ...timestamps
});

export default blogs;