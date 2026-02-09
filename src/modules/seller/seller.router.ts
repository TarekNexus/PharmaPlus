import { Router } from "express";
import { SellerController } from "./seller.controller";
import auth, { UserRole } from "../../middleware/auth";

const router = Router();

// ===== MEDICINES =====
router.get("/order", auth(UserRole.SELLER, UserRole.ADMIN), SellerController.getOrders);
router.post("/medicines", auth(UserRole.SELLER,UserRole.ADMIN), SellerController.addMedicine);
router.put("/medicines/:id", auth(UserRole.SELLER,UserRole.ADMIN), SellerController.updateMedicine);
router.delete("/medicines/:id", auth(UserRole.SELLER,UserRole.ADMIN), SellerController.deleteMedicine);
router.get(
  "/my-medicines",
  auth(UserRole.SELLER),
  SellerController.getMyMedicines
);

export const SellerRouter: Router = router;
