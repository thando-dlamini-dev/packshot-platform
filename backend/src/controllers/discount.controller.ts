import { Request, Response } from "express";
import db from "../postgres.config";
import discounts from "../db/schema/discountCodes"
import { eq } from "drizzle-orm"

export const getCodeByName = async (req: Request, res: Response)=> {
    try {
        const code = req.params.code as string;
        const isValid = await db.select().from(discounts).where(eq(discounts.discountCode, code))

        if(isValid.length === 0){
            return res.status(400).json({
                success: false,
                message: "Discount Code is Invalid or expired."
            })
        }

        return res.status(200).json({
            success: true,
            discountCode: isValid[0]
        })
    }
    catch (error) {

    }
}