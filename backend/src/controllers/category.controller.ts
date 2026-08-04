import { Request, Response } from 'express';
import db from "../postgres.config"
import categories from "../db/schema/categories";
import { eq } from "drizzle-orm"

export const getCategories = async (req: Request, res: Response) => {
    try{
        const categoryList = await db.select().from(categories)
        const activeCategories = categoryList.filter((category) => category.isActive === true)

        return res.status(200).json({
            success: true,
            message: "Categories fetched successfully.",
            categories: activeCategories,
        })
    }
    catch(err){
        console.log("Error in getCategories endpoint", err);
        res.status(500).json({
            success: false,
            message: "Error while fetching categories.",
        })
    }
}

export const createCategory = async (req: Request, res: Response) => {
    try{
        const { userRole } = req.params;
        const { name } = req.body;

        if(userRole !== "admin") {
            res.status(401).json({
                success: false,
                message: "Only admins can add a category.",
            })
        }

        const categoryName = await db.insert(categories).values({name}).returning({ name: categories.name })

        return res.status(200).json({
            success: true,
            message: `Category ${categoryName} created.`,
        })
    }
    catch (err){
        res.status(500).json({
            success: false,
            message: `Error while creating category: ${req.body.name}`,
        })
    }


}

export const updateCategory = async (req: Request, res: Response) => {
    try{
        const {userRole} = req.params;
        const {name, isActive} = req.body;

        if (userRole !== "admin") {
            res.status(401).json({
                success: false,
                message: "Only admins can update a category.",
            })
        }

        const categoryName = await db.update(categories).set({isActive}).where(eq(categories.name, name)).returning({ name: categories.name })

        return res.status(200).json({
            success: true,
            message: `Category ${categoryName} updated successfully.`,
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `Error while updating category: ${req.body.name}`,
        })
    }

}