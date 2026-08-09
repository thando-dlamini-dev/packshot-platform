import { Router } from 'express';
import {globalLimiter} from "../middleware/rateLimitMiddleware";
import {createCategory, getCategories, updateCategoryStatus} from "../controllers/category.controller";
import globalRoleMiddleware from "../middleware/adminRoleMiddleware";

const router = Router();

router.get("/", globalLimiter, getCategories)
router.post("/", globalLimiter, globalRoleMiddleware, createCategory)
router.patch("/:id", globalLimiter, globalRoleMiddleware, updateCategoryStatus)

export default router;