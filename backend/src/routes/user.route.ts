import { Router } from "express";
import {getAllUsers, getUserById, getUserInfo} from "../controllers/user.controller";

const router = Router();

//Mid-Auth Routes
router.get("/:id", getUserById);
router.get("/", getAllUsers);
router.patch("/", getUserById);

//Post-Auth Routes
router.get("/me/:id", getUserInfo);

export default router;