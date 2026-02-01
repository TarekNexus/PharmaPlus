import { prisma } from "../../lib/prisma";

// ===== USERS =====
const getAllUsers = () =>
  prisma.user.findMany({ orderBy: { createdAt: "desc" } });


const getUserById = (userId: string) =>
  prisma.user.findUnique({ where: { id: userId } });



const updateUserRole = (userId: string, data: any) => 
  prisma.user.update({ 
    where: { id: userId }, 
    data 
  })


// ===== MEDICINES =====
const getAllMedicines = () =>
  prisma.medicine.findMany({ include: { seller: true, category: true } });

// ===== ORDERS =====
const getAllOrders = () =>
  prisma.order.findMany({
    include: { user: true, items: { include: { medicine: true } } },
    orderBy: { createdAt: "desc" },
  });

// ===== CATEGORIES =====
const getAllCategories = () => prisma.category.findMany();
const addCategory = (data: any) => prisma.category.create({ data });
const updateCategory = (categoryId: string, data: any) =>
  prisma.category.update({ where: { id: categoryId }, data });
const deleteCategory = (categoryId: string) =>
  prisma.category.delete({ where: { id: categoryId } });

// ===== EXPORT =====
export const AdminService = {
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
