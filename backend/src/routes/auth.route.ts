import { Router } from "express";
import {authLimiter} from "../middleware/rateLimitMiddleware";
import {googleAuth, googleCallback} from "../controllers/auth.controller";
import {authMiddleware} from "../middleware/authMiddleware";
import passport from "../passport.config"
import jwt from "jsonwebtoken";
const router = Router();
import { User } from "../passport.config"
import dotenv from "dotenv";

dotenv.config();

router.get("/google", authLimiter, googleAuth)
router.get("/google/callback",
        passport.authenticate("google", {
            failureRedirect: `${process.env.FRONTEND_URL}/login`,
            session: false
        }),
        (req, res) => {
            const user = req.user as User
            console.log(`:Req User: ${user}\n JWT secret: ${process.env.JWT_SECRET}`);
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET!,
                { expiresIn: "7d" }
            )
            res.json({ token })
        }
    )

export default router;