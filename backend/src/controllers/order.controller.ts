import {Request, Response} from "express";
import db from "../postgres.config";
import orders from "../db/schema/orders"

export const createOrder = async (req: Request, res: Response) => {
    try{
        const { userId } = req.params
        const {categoryId} = req.body

        const order = await db.insert(orders).values({
            userId: Number(userId),
            categoryId: Number(categoryId),
        })
    }
    catch(err){
        console.log("Error in createOrder endpoint:", err);
        res.status(500).json({
            success: false,
            message: "Error while creating order."
        })
    }
}

export const updateOrder = async (req: Request, res: Response) => {
    try{

    }
    catch (err){

    }
}