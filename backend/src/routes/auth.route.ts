import { Router } from "express";
import {authLimiter} from "../middleware/rateLimitMiddleware";
import {login} from "../controllers/auth.controller";

const router = Router();

router.get("/", authLimiter, login)


export default router;