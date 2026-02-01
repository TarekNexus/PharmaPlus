import { Request, Response } from "express";
import { OrderService } from "./order.service";


const getOrders = async (req: Request, res: Response) => {
  const orders = await OrderService.getOrders(req.user!.id);
  res.json(orders);
};

const getOrderById = async (req: Request, res: Response) => {
  const order = await OrderService.getOrderById(req.user!.id, req.params.id);
  res.json(order);
};

const createOrder = async (req: Request, res: Response) => {
  const { items, address } = req.body;
  const order = await OrderService.createOrder(req.user!.id, items, address);
  res.json(order);
};

// ===== EXPORT =====
export const OrderController = {
  getOrders,
  getOrderById,
  createOrder,
};
