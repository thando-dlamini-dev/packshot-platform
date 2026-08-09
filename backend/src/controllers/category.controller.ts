import { Request, Response } from 'express';
import db from "../postgres.config"
import categories from "../db/schema/categories";
import { eq } from "drizzle-orm"
import { User } from "../passport.config"


//Returns all categories
export const getCategories = async (req: Request, res: Response) => {
    try{
        const categoryList = await db.select().from(categories)
        const activeCategories = categoryList.filter((category) => category.isActive === true)

        if(activeCategories.length === 0){
            return res.status(404).json({
                success: false,
                message: "No categories found found."
            })
        }
        return res.status(200).json({
            success: true,
            message: "Categories fetched successfully.",
            categories: activeCategories,
        })
    }
    catch(err: any){
        console.log("Error in getCategories endpoint", err);
        res.status(500).json({
            success: false,
            message: err.cause.details || "Error while fetching categories.",
        })
    }
}

export const createCategory = async (req: Request, res: Response) => {
    try{
        const { name } = req.body;

        const categoryName = await db.insert(categories).values({name}).returning({ name: categories.name })

        return res.status(200).json({
            success: true,
            message: `Category ${categoryName[0]} created.`,
        })
    }
    catch (err: any){
        res.status(500).json({
            success: false,
            message: err.cause.details ||  `Error while creating category: ${req.body.name}`,
        })
    }
}

export const updateCategoryStatus = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const { isActive } = req.body;

        const categoryName = await db.update(categories).set({isActive}).where(eq(categories.id, Number(id))).returning({ name: categories.name })

        return res.status(200).json({
            success: true,
            message: `Category ${categoryName[0]} updated successfully.`,
        })
    }
    catch(err: any){
        res.status(500).json({
            success: false,
            message: err.cause.details ||  `Error while updating category: ${req.body.name}`,
        })
    }

}