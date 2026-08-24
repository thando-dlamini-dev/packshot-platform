import {NextFunction, Request, Response} from 'express';
import passport from "passport";
import { User } from "../passport.config";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false
})

export const googleCallback = async (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate("google", {
        session: false
    },
        (err, user: User) => {
            console.log(`:Req User: ${JSON.stringify(user)}`);

            if (err || !user) {
                console.log("Error in googleCallback endpoint", err);
                return res.status(500).json({
                    message: "Authentication failed",
                })
            }

            const token = jwt.sign(
                user,
                process.env.JWT_SECRET!,
                { expiresIn: "7d" }
            )

            res.redirect(`${process.env.FRONTEND_URL}`)
        }
    )(req, res, next)
}