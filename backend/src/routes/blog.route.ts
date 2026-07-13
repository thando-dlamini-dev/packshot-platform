import {Request, Response, Router} from "express";
import db from "../postgres.config"
import blogs from "../db/schema/blogs"
import {createBlog, getAllBlogs} from "../controllers/blog.controller";

const router = Router();

router.post("/", createBlog);

router.get("/", getAllBlogs)

router.post("/:id", (req: Request, res: Response) => {

})

export default router;