import { CustomerService } from "./customer.service";
// ===== PROFILE =====
const getProfile = async (req, res) => {
    try {
        const profile = await CustomerService.getProfile(req.user.id);
        res.status(200).json({ success: true, data: profile });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const updateProfile = async (req, res) => {
    try {
        const profile = await CustomerService.updateProfile(req.user.id, req.body);
        res.status(200).json({ success: true, message: "Profile updated", data: profile });
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Failed to update profile", error: error.message });
    }
};
// ===== ORDERS =====
const getOrders = async (req, res) => {
    try {
        const orders = await CustomerService.getOrders(req.user.id);
        res.status(200).json({ success: true, data: orders });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getOrderById = async (req, res) => {
    try {
        const order = await CustomerService.getOrderById(req.user.id, req.params.id);
        res.status(200).json({ success: true, data: order });
    }
    catch (error) {
        res.status(404).json({ success: false, message: error.message });
    }
};
const createOrder = async (req, res) => {
    try {
        const { items, address, name, phone } = req.body;
        const order = await CustomerService.createOrder(req.user.id, items, address, name, phone);
        res.status(201).json({ success: true, message: "Order placed", data: order });
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Failed to place order", error: error.message });
    }
};
// ===== REVIEWS =====
const addReview = async (req, res) => {
    try {
        const { medicineId, rating, comment } = req.body;
        const review = await CustomerService.addReview(req.user.id, medicineId, rating, comment);
        res.status(201).json({
            success: true,
            message: "Review submitted",
            data: review,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const getReviewsForMedicine = async (req, res) => {
    try {
        const reviews = await CustomerService.getReviewsForMedicine(req.params.medicineId);
        res.status(200).json({
            success: true,
            data: reviews.map(r => ({
                customerName: r.user.name,
                rating: r.rating, // Convert number to stars
                comment: r.comment,
                createdAt: r.createdAt,
            })),
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// customer.controller.ts
const cancelOrder = async (req, res) => {
    try {
        const order = await CustomerService.cancelOrder(req.user.id, req.params.id);
        res.status(200).json({
            success: true,
            message: "Order cancelled successfully",
            data: order,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// ===== EXPORT =====
export const CustomerController = {
    getProfile,
    updateProfile,
    getOrders,
    getOrderById,
    createOrder,
    addReview,
    getReviewsForMedicine,
    cancelOrder
};
