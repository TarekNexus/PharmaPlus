import { Request, Response } from "express";
import { AdminService } from "./admin.service";

// ===== USERS =====
const getAllUsers = async (_req: Request, res: Response) => {
  const users = await AdminService.getAllUsers();
  res.json(users);
};
const getUserById = async (req: Request, res: Response) => {
  const user = await AdminService.getUserById(req.params.id as string);
  res.json(user);
}
const updateUserRole = async (req: Request, res: Response) => {
  const user = await AdminService.updateUserRole(req.params.id as string, req.body);
  res.json(user);
};

// ===== MEDICINES =====
const getAllMedicines = async (_req: Request, res: Response) => {
  const medicines = await AdminService.getAllMedicines();
  res.json(medicines);
};

// ===== ORDERS =====
const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await AdminService.getAllOrders();
  res.json(orders);
};

// ===== CATEGORIES =====
const getAllCategories = async (_req: Request, res: Response) => {
  const categories = await AdminService.getAllCategories();
  res.json(categories);
};

const addCategory = async (req: Request, res: Response) => {
  const category = await AdminService.addCategory(req.body);
  res.json(category);
};

const updateCategory = async (req: Request, res: Response) => {
  const category = await AdminService.updateCategory(req.params.id, req.body);
  res.json(category);
};

const deleteCategory = async (req: Request, res: Response) => {
  const category = await AdminService.deleteCategory(req.params.id);
  res.json(category);
};

// ===== EXPORT =====
export const AdminController = {
  getAllUsers,
  updateUserRole,
  getAllMedicines,
  getAllOrders,
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getUserById
};
