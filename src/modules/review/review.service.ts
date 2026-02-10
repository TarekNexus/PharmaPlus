import { prisma } from "../../lib/prisma";

const addReview = (userId: string, medicineId: string, rating: number, comment: string) =>
  prisma.review.create({
    data: { userId, medicineId, rating, comment },
    include: { user: true },
  });

const getReviewsForMedicine = (medicineId: string) =>
  prisma.review.findMany({
    where: { medicineId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

export const ReviewService = {
  addReview,
  getReviewsForMedicine,
};
