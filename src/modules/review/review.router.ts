import { Router } from "express";

import auth, { UserRole } from "../../middleware/auth";
import { ReviewController } from "./review.controller";


const router = Router();

router.post("/reviews", auth(UserRole.CUSTOMER), ReviewController.addReview);
router.get("/reviews/:medicineId", ReviewController.getReviewsForMedicine);

export const ReviewRouter = router;
