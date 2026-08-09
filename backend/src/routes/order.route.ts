import { Router } from "express";
import {globalLimiter} from "../middleware/rateLimitMiddleware";
import { createOrder, getAllOrders, getOrderById, getUserOrders, updateOrderStatus } from "../controllers/order.controller";
import globalRoleMiddleware from "../middleware/adminRoleMiddleware";

const router = Router();

router.post("/", globalLimiter, createOrder)
router.get("/", globalLimiter, getUserOrders)
router.get("/:orderId", globalLimiter, getOrderById)
router.get("/", globalLimiter, globalRoleMiddleware, getAllOrders)
router.patch("/:orderId", globalLimiter, globalRoleMiddleware, updateOrderStatus)

export default router;