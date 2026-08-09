import { Router } from "express";
import {globalLimiter} from "../middleware/rateLimitMiddleware";
import { createOrder, getAllOrders, getOrderById, getUserOrders, updateOrderStatus } from "../controllers/order.controller";

const router = Router();

router.post("/", globalLimiter, createOrder)
router.get("/", globalLimiter, getUserOrders)
router.get("/:orderId", globalLimiter, getOrderById)
router.get("/", globalLimiter, getAllOrders)
router.patch("/:orderId", globalLimiter, updateOrderStatus)

export default router;