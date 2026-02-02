import { prisma } from "../../lib/prisma";
// ===== PUBLIC =====
const getAllMedicines = () => prisma.medicine.findMany({
    include: { category: true, seller: true },
    orderBy: { createdAt: "desc" },
});
const getMedicineById = (id) => prisma.medicine.findUnique({
    where: { id },
    include: { category: true, seller: true },
});
const getAllCategories = () => prisma.category.findMany({ orderBy: { createdAt: "desc" } });
export const MedicineService = {
    getAllMedicines,
    getMedicineById,
    getAllCategories,
};
