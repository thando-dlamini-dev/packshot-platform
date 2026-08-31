import type { Request , Response , NextFunction } from "express";
import db from '../postgres.config'
import users from "../db/schema/users"
import {eq} from "drizzle-orm";
import {uuid} from "drizzle-orm/pg-core";

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await db.select().from(users).where(eq(users.id, id as string))

        //return error if user is not found
        if(!user){
            return res.status(404).json({
                success: false,
                error: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            user,
            message: "User fetched successfully"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Error while trying to retrieve user"
        })
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const userList = await db.select().from(users)
        if(!users){
            return res.status(404).json({
                success: false,
                error: "Users not found"
            })
        }

        return res.status(200).json({
            success: true,
            users: userList,
            message: "Successfully retrieved all users"
        })
    }
    catch (error: any) {
        console.log(error.cause.details);
        return res.status(500).json({
            success: false,
            error: "Error while trying to retrieve all users"
        })
    }
}

//get user info without exposing sensitive fields like passwords and ids
export const getUserInfo = async (req: Request, res: Response) => {
    try {
        const { id }  = req.params;
        const user = await db.select({
            userName: users.userName,
            email: users.email,
            businessName: users.userName,
            avatarUrl: users.avatarUrl,
        }).from(users).where(eq(users.id, id as string))

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            user,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: "Error while trying to retrieve user info"
        })
    }
}