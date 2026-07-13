import type { Request , Response , NextFunction } from "express";
import db from '../postgres.config'
import users from "../db/schema/users"
import {eq} from "drizzle-orm";

export const login = async (req: Request, res: Response) => {

}
