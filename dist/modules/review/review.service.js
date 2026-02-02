import { prisma } from "../../lib/prisma";
// ===== REVIEWS =====
const addReview = (userId, medicineId, rating, comment) => prisma.review.create({ data: { userId, medicineId, rating, comment } });
const getReviewsForMedicine = (medicineId) => prisma.review.findMany({
    where: { medicineId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
});
// ===== EXPORT =====
export const ReviewService = {
    addReview,
    getReviewsForMedicine,
};
