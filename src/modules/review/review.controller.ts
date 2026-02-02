import { Request, Response } from "express";
import { ReviewService } from "./review.service";


const addReview = async (req: Request, res: Response) => {
  const { medicineId, rating, comment } = req.body;
  const review = await ReviewService.addReview(req.user!.id, medicineId, rating, comment);
  res.json(review);
};

const getReviewsForMedicine = async (req: Request, res: Response) => {
  const reviews = await ReviewService.getReviewsForMedicine(req.params.medicineId as string);
  res.json(reviews);
};

// ===== EXPORT =====
export const ReviewController = {
  addReview,
  getReviewsForMedicine,
};
