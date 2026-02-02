import { AdminService } from "./admin.service";
const getAllUsers = async (_req, res) => {
    try {
        const users = await AdminService.getAllUsers();
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const getUserById = async (req, res) => {
    try {
        const user = await AdminService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ success: false, message: "User not found" });
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const updateUserRole = async (req, res) => {
    try {
        const user = await AdminService.updateUserRole(req.params.id, req.body);
        res.status(200).json({ success: true, message: "User role updated", data: user });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getAllMedicines = async (_req, res) => {
    try {
        const medicines = await AdminService.getAllMedicines();
        res.status(200).json({ success: true, data: medicines });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const getAllOrders = async (_req, res) => {
    try {
        const orders = await AdminService.getAllOrders();
        res.status(200).json({ success: true, data: orders });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const getAllCategories = async (_req, res) => {
    try {
        const categories = await AdminService.getAllCategories();
        res.status(200).json({ success: true, data: categories });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
const addCategory = async (req, res) => {
    try {
        const category = await AdminService.addCategory(req.body);
        res.status(201).json({ success: true, message: "Category added", data: category });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const updateCategory = async (req, res) => {
    try {
        const category = await AdminService.updateCategory(req.params.id, req.body);
        res.status(200).json({ success: true, message: "Category updated", data: category });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const deleteCategory = async (req, res) => {
    try {
        const category = await AdminService.deleteCategory(req.params.id);
        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: category,
        });
    }
    catch (error) {
        if (error.message === "CATEGORY_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "Category already deleted or not found",
            });
        }
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const toggleUserBan = async (req, res) => {
    try {
        const user = await AdminService.toggleUserBan(req.params.id);
        res.status(200).json({
            success: true,
            message: user.isBanned ? "User banned successfully" : "User unbanned successfully",
            data: user,
        });
    }
    catch (error) {
        if (error.message === "USER_NOT_FOUND") {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
export const AdminController = {
    getAllUsers,
    getUserById,
    updateUserRole,
    getAllMedicines,
    getAllOrders,
    getAllCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    toggleUserBan
};
