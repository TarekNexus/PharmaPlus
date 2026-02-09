import { Request, Response } from "express";
import { SellerService } from "./seller.service";
import { OrderStatus } from "../../generated/prisma/enums";

// ===== MEDICINES =====
const addMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await SellerService.addMedicine(req.user!.id, req.body);
    res.status(201).json({
      success: true,
      message: "Medicine added successfully",
      data: medicine,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to add medicine",
      error: error.message || error,
    });
  }
};

const updateMedicine = async (req: Request, res: Response) => {
  try {
    const medicine = await SellerService.updateMedicine(
      req.user!.id,
      req.params.id as string,
      req.body,
    );
    res.status(200).json({
      success: true,
      message: "Medicine updated successfully",
      data: medicine,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed to update medicine",
      error: error.message || error,
    });
  }
};

const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const result = await SellerService.deleteMedicine(
      req.user!.id,
      req.params.id as string,
    );
    res.status(200).json({
      success: true,
      message: "Medicine deleted successfully",
      data: result,
    });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed to delete medicine",
      error: error.message || error,
    });
  }
};

const getMyMedicines = async (req: Request, res: Response) => {
  try {
    const medicines = await SellerService.getMyMedicines(req.user!.id);

    res.status(200).json({
      success: true,
      message: "My medicines fetched successfully",
      data: medicines.data,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch medicines",
      error: error.message || error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await SellerService.getOrders(req.user!.id);
    res.status(200).json({ success: true, data: orders });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ===== EXPORT =====
export const SellerController = {
  addMedicine,
  updateMedicine,
  deleteMedicine,
  getMyMedicines,
  getOrders
};
