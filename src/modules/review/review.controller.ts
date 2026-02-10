import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const addReview = async (req: Request, res: Response) => {
  const { medicineId, rating, comment } = req.body;
  try {
    const review = await ReviewService.addReview(req.user!.id, medicineId, rating, comment);
    res.json({ success: true, data: review });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getReviewsForMedicine = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getReviewsForMedicine(req.params.medicineId as string);
    res.json({ success: true, data: reviews });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const ReviewController = {
  addReview,
  getReviewsForMedicine,
};
