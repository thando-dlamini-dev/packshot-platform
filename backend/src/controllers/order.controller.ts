import {Request, Response} from "express";
import db from "../postgres.config";
import orders from "../db/schema/orders"
import deliverables from "../db/schema/deliverables";

export const createOrder = async (req: Request, res: Response) => {
    try{
        const { userId } = req.params
        const { categoryId, businessName } = req.body

        const order = await db.insert(orders).values({
            userId: Number(userId),
            businessName,
            categoryId: Number(categoryId),
        }).returning()

        return res.status(200).json({
            success: true,
            message: `Order created successfully.`,
            order
        })
    }
    catch(err: any){
        console.log("Error in createOrder endpoint:", err);
        res.status(500).json({
            success: false,
            message: err.cause.detail ||`Error while creating order ${req.params.businessName || ""}.`
        })
    }
}

export const updateOrderStatus = async (req: Request, res: Response) => {
    try{

    }
    catch (err){

    }
}