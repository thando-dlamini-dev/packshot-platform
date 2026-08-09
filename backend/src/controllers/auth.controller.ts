import { Request, Response } from 'express';
import passport from "passport";
import { User } from "../passport.config";
import jwt from "jsonwebtoken";

export const googleAuth = passport.authenticate("google", {
    scope: ["profile, email"],
    session: false
})

export const googleCallback = async (req: Request, res: Response) => {
        passport.authenticate("google", {
        failureRedirect: `${process.env.FRONTEND_URL}/login`,
        session: false
    })
    const user = req.user as User;
    const token = jwt.sign(
        user,
        process.env.JWT_SECRET!,
        { expiresIn: "7d"}
    )

    //Redirect to home page after successful Login
    res.json({ token }).redirect(`${process.env.FRONTEND_URL}`);
}