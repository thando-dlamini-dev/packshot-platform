import type { Request , Response , NextFunction } from "express";
import db from '../postgres.config'
import users from

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await db.query

        if(!user){
            throw new Error("User does not exist");
        }
    }
    catch (error) {

    }
}