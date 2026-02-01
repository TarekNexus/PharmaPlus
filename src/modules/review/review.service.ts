import { prisma } from "../../lib/prisma";

// ===== REVIEWS =====
const addReview = (userId: string, medicineId: string, rating: number, comment: string) =>
  prisma.review.create({ data: { userId, medicineId, rating, comment } });

const getReviewsForMedicine = (medicineId: string) =>
  prisma.review.findMany({
    where: { medicineId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

// ===== EXPORT =====
export const ReviewService = {
  addReview,
  getReviewsForMedicine,
};
