import {Request, Response} from "express";
import db from "../postgres.config";
import blogs from "../db/schema/blogs";
import { eq } from "drizzle-orm"
import users from "../db/schema/users";
import categories from "../db/schema/categories";

export const createBlog = async (req: Request, res: Response) => {
    try{
        const { title, content, summary } = req.body

        const slug = title.replaceAll(" ", "-").toLowerCase();

        if (!title || !content || !summary) {
            return res.status(404).json({
                success: false,
                message: "Missing required fields: (title, content, summary)",
            })
        }

        const blogTitle = await db.insert(blogs).values({
            title,
            slug,
            content,
            summary
        }).returning({title})

        res.status(200).json({
            success: true,
            message: `Successfully created blog ${blogTitle[0]}`
        })
    }
    catch(err: any){
        console.log("Error in createBlog endpoint: ", err.cause.details);
        return res.status(500).json({
            success: false,
            message: err.cause.details || "Error while trying to create blog."
        })
    }
}

export const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const blogList = await db.select().from(blogs)

        if(!blogs){
            return res.status(404).json({
                success: false,
                message: "No blogs found"
            })
        }

        res.status(200).json({
            success: true,
            count: blogList.length,
            blogs: blogList
        })
    }
    catch(err: any){
        console.log("Error in getAllBlogs endpoint: ", err.cause.details);
        return res.status(500).json({
            success: false,
            message: err.cause.details || "Error while trying to retrieve all blogs"
        })
    }
}

export const deleteBlog = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        const blogId = Number(id);

        const blogTitle = await db.delete(blogs).where(eq(blogs.id, blogId)).returning({title: blogs.title});

        return res.status(200).json({
            success: true,
            message: `Successfully deleted blog ${blogTitle[0]}`
        })
    }
    catch(err: any){
        console.log("Error in deleteBlog endpoint", err.cause.details);
        return res.status(500).json({
            success: false,
            message: err.cause.details || "Error while trying to retrieve all blogs"
        })
    }
}
