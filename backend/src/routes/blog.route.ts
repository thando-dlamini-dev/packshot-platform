import {Request, Response, Router} from "express";
import {createBlog, deleteBlog, getAllBlogs} from "../controllers/blog.controller";
import globalRoleMiddleware from "../middleware/adminRoleMiddleware";
import {globalLimiter} from "../middleware/rateLimitMiddleware";

const router = Router();

router.post("/", globalLimiter, globalRoleMiddleware, createBlog);
router.get("/", globalLimiter, getAllBlogs)
router.delete("/:id", globalLimiter, globalRoleMiddleware, deleteBlog)

export default router;