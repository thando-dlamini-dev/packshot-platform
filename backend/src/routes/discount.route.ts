import { Router } from "express";
import {getCodeByName} from "../controllers/discount.controller";


const router = Router();

router.get("/:code", getCodeByName)

export default router