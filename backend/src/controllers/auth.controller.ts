import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import passport from "passport";

export const googleAuth = passport.authenticate("google", {
    scope: ["profile, email"],
    session: false
})

export const googleCallback = async (req: Request, res: Response) => {
        passport.authenticate("google", {
        failureRedirect: `${process.env.FRONTEND_URL}/login`,
        session: false
    })

    //Redirect to home page after successful Login
    res.redirect(`${process.env.FRONTEND_URL}`);
}

export const jwtAuth = ( req: Request,  res: Response ) => {
    if (!req.user) {
        return res.status(401).json({ message: "User context missing" });
    }

    const token = jwt.sign(
        {
            user: req.user,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h"}
    )
}
