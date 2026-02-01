import { Router } from "express";

import auth, { UserRole } from "../../middleware/auth";
import { OrderController } from "./order.controller";


const router = Router();

router.get("/orders", auth(UserRole.CUSTOMER), OrderController.getOrders);
router.get("/orders/:id", auth(UserRole.CUSTOMER), OrderController.getOrderById);
router.post("/orders", auth(UserRole.CUSTOMER), OrderController.createOrder);

export const OrderRouter = router;
