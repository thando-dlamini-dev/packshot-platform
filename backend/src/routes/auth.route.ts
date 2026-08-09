import { Router } from "express";
import {authLimiter} from "../middleware/rateLimitMiddleware";
import {googleAuth, googleCallback} from "../controllers/auth.controller";

const router = Router();

router.get("/google", authLimiter, googleAuth)
router.get("/google/callback", authLimiter, googleCallback)


export default router;