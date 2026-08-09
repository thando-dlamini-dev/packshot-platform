import { Router } from 'express';
import {globalLimiter} from "../middleware/rateLimitMiddleware";
import {createCategory, getCategories, updateCategoryStatus} from "../controllers/category.controller";

const router = Router();

router.get("/", globalLimiter, getCategories)
router.post("/", globalLimiter, createCategory)
router.patch("/:id", globalLimiter, updateCategoryStatus)

export default router;