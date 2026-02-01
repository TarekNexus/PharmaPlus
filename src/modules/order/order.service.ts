import { OrderStatus } from "../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";



// Get all orders for the seller's medicines
const getOrders = async (sellerId: string) => {
  return prisma.order.findMany({
    where: {
      items: {
        some: {
          medicine: {
            sellerId,
          },
        },
      },
    },
    include: {
      
      items: { include: { medicine: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

// Update order status
const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
  // 1️⃣ Fetch order first
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) throw new Error("Order not found");

  // 2️⃣ Optional: Prevent status regression
  const statusOrder = [
    OrderStatus.PLACED,
    OrderStatus.PROCESSING,
    OrderStatus.SHIPPED,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELLED,
  ];
  const currentIndex = statusOrder.indexOf(order.status);
  const newIndex = statusOrder.indexOf(status);

  if (order.status === OrderStatus.DELIVERED || order.status === OrderStatus.CANCELLED) {
    throw new Error(`Cannot update order after it is ${order.status}`);
  }

  if (newIndex < currentIndex) {
    throw new Error(`Cannot revert order status from ${order.status} to ${status}`);
  }

  // 3️⃣ Update status
  const updatedOrder = await prisma.order.update({
    where: { id: orderId },
    data: { status },
    include: { items: { include: { medicine: true } }, user: true },
  });

  return updatedOrder;
};


// ===== EXPORT =====
export const OrderService = {
   getOrders,
  updateOrderStatus,
};
