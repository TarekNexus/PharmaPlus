import { Router } from "express";
import { MedicineController } from "./medicine.controller";


const router = Router();

router.get("/categories/all", MedicineController.getAllCategories);
router.get("/getMedicinesByCategory/:categoryId", MedicineController.getMedicinesByCategory);
router.get("/:id", MedicineController.getMedicineById);
router.get("/", MedicineController.getAllMedicines);









export const medicineRouter: Router = router;
