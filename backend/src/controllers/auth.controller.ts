import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import passport from "passport";

export const googleAuth = passport.authenticate("google", {
    scope: ["profile, email"],
    session: false
})

export const googleCallback = passport.authenticate("google", {
    failureRedirect: "/login",
    session: false
})

export const jwtAuth = ( req: Request,  res: Response ) => {
    if (!req.user) {
        return res.status(401).json({ message: "User context missing" });
    }

    const token = jwt.sign(
        {
            id: req.user.id,
            email: req.user.email
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h"}
    )


}
