import { MedicineService } from "./medicine.service";
// ===== PUBLIC =====
const getAllMedicines = async (_req, res) => {
    try {
        const medicines = await MedicineService.getAllMedicines();
        res.status(200).json({
            success: true,
            message: "All medicines fetched successfully",
            data: medicines,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch medicines",
            error: error.message || error,
        });
    }
};
const getMedicineById = async (req, res) => {
    try {
        const medicine = await MedicineService.getMedicineById(req.params.id);
        if (!medicine) {
            // Medicine not found
            return res.status(404).json({
                success: false,
                message: "Medicine not found",
            });
        }
        // Medicine found
        res.status(200).json({
            success: true,
            message: "Medicine fetched successfully",
            data: medicine,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch medicine",
            error: error.message || error,
        });
    }
};
const getAllCategories = async (_req, res) => {
    try {
        const categories = await MedicineService.getAllCategories();
        res.status(200).json({
            success: true,
            message: "All categories fetched successfully",
            data: categories,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch categories",
            error: error.message || error,
        });
    }
};
// ===== EXPORT OBJECT =====
export const MedicineController = {
    getAllMedicines,
    getMedicineById,
    getAllCategories,
};
