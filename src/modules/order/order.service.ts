import { prisma } from "../../lib/prisma";


// ===== ORDERS =====
const getOrders = (userId: string) =>
  prisma.order.findMany({
    where: { userId },
    include: { items: { include: { medicine: true } } },
    orderBy: { createdAt: "desc" },
  });

const getOrderById = (userId: string, orderId: string) =>
  prisma.order.findUnique({
    where: { id: orderId },
    include: { items: { include: { medicine: true } }, user: true },
  });

const createOrder = (userId: string, items: any[], address: string) =>
  prisma.order.create({
    data: {
      userId,
      address,
      items: { create: items },
    },
    include: { items: { include: { medicine: true } } },
  });

// ===== EXPORT =====
export const OrderService = {
  getOrders,
  getOrderById,
  createOrder,
};
