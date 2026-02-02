import { ReviewService } from "./review.service";
const addReview = async (req, res) => {
    const { medicineId, rating, comment } = req.body;
    const review = await ReviewService.addReview(req.user.id, medicineId, rating, comment);
    res.json(review);
};
const getReviewsForMedicine = async (req, res) => {
    const reviews = await ReviewService.getReviewsForMedicine(req.params.medicineId);
    res.json(reviews);
};
// ===== EXPORT =====
export const ReviewController = {
    addReview,
    getReviewsForMedicine,
};
