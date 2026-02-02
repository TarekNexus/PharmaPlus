import { OrderStatus } from "../../generated/prisma/enums";
import { OrderService } from "./order.service";
// order
const getOrders = async (req, res) => {
    try {
        const orders = await OrderService.getOrders(req.user.id);
        res.status(200).json({ success: true, data: orders });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;
        const user = req.user; // id + role
        if (!Object.values(OrderStatus).includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid order status",
            });
        }
        const order = await OrderService.updateOrderStatus(id, status, user);
        res.status(200).json({
            success: true,
            message: "Order updated",
            data: order,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// ===== EXPORT =====
export const OrderController = {
    getOrders,
    updateOrderStatus,
};
