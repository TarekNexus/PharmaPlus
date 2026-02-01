import { prisma } from "../../lib/prisma";

// ===== MEDICINES =====
const addMedicine = async (sellerId: string, data: any) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!category) {
      throw new Error(`Category with id ${data.categoryId} does not exist`);
    }

    return await prisma.medicine.create({
      data: { ...data, sellerId },
      include: { category: true, seller: true },
    });
  } catch (error) {
    throw error;
  }
};
  
const updateMedicine = async (sellerId: string, medicineId: string, data: any) => {
  try {
    return await prisma.medicine.updateMany({
      where: { id: medicineId, sellerId },
      data,
    });
  } catch (error) {
    throw error;
  }
};

const deleteMedicine = async (sellerId: string, medicineId: string) => {
  try {
    const result = await prisma.medicine.deleteMany({
      where: { id: medicineId, sellerId },
    });

    if (result.count === 0) {
      throw new Error("Medicine not found or not authorized");
    }

    return result;
  } catch (error) {
    throw error;
  }
};



// ===== EXPORT =====
export const SellerService = {
  addMedicine,
  updateMedicine,
  deleteMedicine,
};
