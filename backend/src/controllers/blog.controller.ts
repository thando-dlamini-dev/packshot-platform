import {Request, Response} from "express";
import db from "../postgres.config";
import blogs from "../db/schema/blogs";
import { eq } from "drizzle-orm"
import users from "../db/schema/users";

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

        await db.insert(blogs).values({
            title,
            slug,
            content,
            summary
        })

        res.status(200).json({
            success: true,
            message: "Successfully created blog"
        })
    }
    catch(err: any){
        console.log(err.detail);
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
        console.log(err.cause);
        return res.status(500).json({
            success: false,
            message: err.cause.details || "Error while trying to retrieve all blogs"
        })
    }
}

export const getBlog = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const blogId = Number(id);

        const blog = await db.select().from(blogs).where(eq(blogs.id, blogId))
    }
    catch(err: any){

    }
}
