import {Request, Response} from "express";
import db from "../postgres.config";
import orders from "../db/schema/orders"
import deliverables from "../db/schema/deliverables";
import users from "../db/schema/users";
import { eq } from "drizzle-orm"
import { User } from "../passport.config"

//Shop Owner - creates an order
export const createOrder = async (req: Request, res: Response) => {
    try{
        const { id } = req.user as User
        const { categoryId, businessName } = req.body

        if(!categoryId || !categoryId){
            return res.status(400).json({
                success: false,
                message: "Category ID or Business name is missing."
            })
        }

        const order = await db.insert(orders).values({
            userId: id,
            businessName,
            categoryId: Number(categoryId),
        }).returning()

        return res.status(200).json({
            success: true,
            message: `Order created successfully.`,
            order: order[0]
        })
    }
    catch(err: any){
        console.log("Error in createOrder endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||`Error while creating order ${req.params.businessName || ""}.`
        })
    }
}

//Shop Owner - returns only orders belonging to the logged-in user
export const getUserOrders = async (req: Request, res: Response) => {
    try{
        const { id } = req.user as User

        const userOrders = await db.select().from(orders).where(eq(orders.userId, id))

        if(userOrders.length === 0){
            return res.status(404).json({
                success: false,
                message: "No user order(s) found."
            })
        }

        return res.status(200).json({
            success: true,
            message: `Order(s) fetched successfully.`,
            orders: userOrders,
        })
    }
    catch(err: any){
        console.log("Error in getUserOrders endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||`Error while fetching order(s).`
        })
    }
}

//Shop Owner - fetches a single order by orderId
export const getOrderById = async (req: Request, res: Response) => {
    try{
        const orderId = req.params.orderId as string;
        const user = req.user as User;

        const order = await db.select().from(orders).where(eq(orders.orderId, orderId));
        if(user.role !== "admin" && order[0].userId !== user.id){
            return res.status(400).json({
                success: false,
                message: "You can only view an order that belongs to you."
            })
        }

        if(order.length === 0){
            return res.status(404).json({
                success: false,
                message: "Order not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: `Order fetched successfully.`,
            order: order[0]
        })
    }
    catch(err: any){
        console.log("Error in getOrderById endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||`Error while updating order status ${req.params.businessName || ""}.`
        })
    }
}

//Admin only - returns every order in the system regardless of who submitted it.
export const getAllOrders = async (req: Request, res: Response) => {
    try{
        const allOrders = await db.select({
            orderId: orders.orderId,
            businessName: orders.businessName,
            status: orders.status,
            price: orders.price,
        }).from(orders)

        if(allOrders.length === 0){
            return res.status(404).json({
                success: false,
                message: "Order not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: "User orders fetched successfully.",
            allOrders
        })
    }
    catch(err: any){
        console.log("Error in getAllOrders endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||"Error while fetching all orders"
        })
    }
}

//Admin Only - Updates order status by order id
export const updateOrderStatus = async (req: Request, res: Response) => {
    try{
        const { role } = req.user as User
        const orderId = req.params.orderId as string;
        const status = req.body.status;

        if(role !== "admin"){
            return res.status(401).json({
                success: false,
                message: "Only admins can update order status.",
            })
        }

        const order = await db.update(orders).set({status}).where(eq(orders.orderId, orderId)).returning()

        return res.status(200).json({
            success: true,
            message: "Order status updated successfully.",
            updatedOrder: order[0]
        })
    }
    catch (err: any){
        console.log("Error in updateOrderStatus endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||`Error while updating order status ${req.params.businessName || ""}.`
        })
    }
}

//Redundant endpoint
export const getOrderByUserId = async (req: Request, res: Response) => {
    try{
        const { googleId } = req.user as User;

        const order = await db.select().from(orders).where(eq(orders.userId, googleId));

        if(order.length === 0){
            return res.status(404).json({
                success: false,
                message: "Order not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: `Order fetched successfully.`,
            order: order[0]
        })
    }
    catch(err: any){
        console.log("Error in getOrderById endpoint:", err.cause.details);
        res.status(500).json({
            success: false,
            message: err.cause.details ||`Error while updating order status ${req.params.businessName || ""}.`
        })
    }
}
