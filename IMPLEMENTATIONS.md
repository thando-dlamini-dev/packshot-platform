# Advanced Implementations — packshot-platform
> Tracked for future consideration. Not all will be built. Prioritize based on actual pain points as the project grows.

---

## 1. LLM Cost & Latency
*Relevant if AI features are added (e.g. auto-generating render descriptions, chatbot support)*

- [ ] **pgvector** — store vectorized embeddings in Postgres for semantic/local search
- [ ] **Semantic caching** — Redis or in-memory cache to avoid repeat AI API calls for similar prompts
- [ ] **Streamed UI responses** — Node.js event streams → React character-by-character rendering

---

## 2. Data Sync & Race Conditions
*Most immediately relevant — order submission double-click, concurrent status updates*

- [ ] **Idempotency keys** — `Idempotency-Key` header on Express endpoints to prevent duplicate order inserts on rapid resubmission
- [ ] **Optimistic UI + rollback** — TanStack Query on frontend: update UI before backend confirms, roll back on 409 conflict
- [ ] **Row locking** — `SELECT ... FOR UPDATE` in Postgres transactions for concurrent order status updates

---

## 3. API–Frontend Type Safety
*Already partially in place with TypeScript + Drizzle. Extend further:*

- [ ] **Zod shared schema** — validate at Express router level, reuse same types in React forms (monorepo structure)
- [ ] **Auto-generated API docs** — tsoa or Swagger reading TypeScript controller definitions → always-synced frontend fetch functions

---

## 4. Multi-Tenant Security
*Relevant once shop owner isolation matters — one owner must never see another's orders*

- [ ] **Postgres Row-Level Security (RLS)** — DB-level enforcement of tenant ownership, not just WHERE clauses in every query
- [ ] **Granular RBAC middleware** — permission arrays (`['orders:read', 'deliverables:write']`) instead of a simple `isAdmin` flag

---

## 5. Infrastructure & Performance
*Worth revisiting when traffic or table size becomes a real concern*

- [ ] **Connection pooling** — pg-pool or Neon's built-in serverless pooler (already partially handled by Neon, worth verifying config)
- [ ] **Cursor-based pagination** — replace `OFFSET` pagination on `getAllOrders` / blog listing with cursor-based queries as tables grow

---

## Priority notes
- **Idempotency keys** — highest priority of this list; order creation is the exact use case and it's cheap to implement early
- **Zod validation** — natural next step once controllers are built; already using TypeScript so the gap is small
- **RLS** — worth adding before any public launch; shop owner data isolation is a real security concern, not just a nice-to-have
- **Everything else** — revisit when the core order flow is working end to end
