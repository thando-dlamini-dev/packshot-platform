import {pgEnum, pgTable, serial, text, timestamp, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns.helpers";

export const postStatusEnum = pgEnum("post_status", ["draft", "published", "archived"]);

const blogs = pgTable("blogs",  {
    id: serial().primaryKey(),
    title: varchar("varchar", { length: 50 }).notNull(),
    content: text("content").notNull(),
    summary: text("summary").notNull(),
    metaDescription: text("meta-description").notNull(),
    status: postStatusEnum(""),
    imgUrl: varchar("varchar", { length: 50 }).notNull(),
    published: timestamp({ withTimezone: true }),
    ...timestamps
});

export default blogs;