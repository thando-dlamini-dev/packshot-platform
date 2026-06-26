packshot-platform


Name and description are placeholders — final branding TBD.



CGI rendering platform for shop owners and small product sellers. Submit reference photos of a packaged product, get studio-quality rendered images back — no shipping, no physical photoshoot.

Status

Early development. Schema design is complete; implementation has not started yet.

Who this is for

Shop owners and small sellers of packaged physical products — cologne bottles, canned drinks, lotions, fast food packaging, and similar goods.

Not currently supported: unpackaged or fresh food items (produce, baked goods, prepared meals).

How it works (planned)


Shop owner submits an order with reference photos of their product
Order is manually reviewed and modeled (currently a one-person ZBrush workflow)
Rendered deliverables (multiple angle/background variants from one model) are returned


Tech stack


Node.js + Express
PostgreSQL
TypeScript
Drizzle ORM


Schema overview

TablePurposeusersShop owners and admin accountscategoriesProduct categories (e.g. bottles, cans, lotions); soft-deletable via is_activeordersOne order = one product submission. Belongs to a user and a category.reference_imagesPhotos uploaded by the shop owner for a given orderdeliverablesRendered output files for a given order (one order can produce many variants)

Relationships: all one-to-many — one user has many orders, one category has many orders, one order has many reference images and many deliverables. No junction tables required, since each order belongs to exactly one product.

Order status workflow: submitted → in_review → in_progress → delivered (subject to change, e.g. a possible revision_requested state).

Setup

Coming soon — local Postgres + Drizzle setup instructions will go here once the connection and migration flow are in place.
