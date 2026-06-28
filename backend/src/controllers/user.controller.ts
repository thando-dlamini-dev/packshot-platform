import type { Request , Response , NextFunction } from "express";
import db from '../postgres.config'
import users from "../db/schema/users"
import {eq} from "drizzle-orm";

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await db.select().from(users).where(eq(users.id, id))

        if(!user){
            throw new Error("User not found");
        }

        return res.status(200).json({
            success: true,
            user
        });
    }
    catch (error) {

    }
}