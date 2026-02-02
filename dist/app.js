import express from "express";
import cors from "cors";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import { SellerRouter } from "./modules/seller/seller.router";
import { AdminRouter } from "./modules/admin/admin.router";
import { CustomerRouter } from "./modules/customer/customer.router";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { OrderRouter } from "./modules/order/order.router";
import { ReviewRouter } from "./modules/review/review.router";
import { userRouter } from "./modules/user/user.router";
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "PharmaPlus server is running!" });
});
app.use("/api/admin", AdminRouter);
app.use("/api/customer", CustomerRouter);
app.use("/api/medicine", medicineRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/reviews", ReviewRouter);
app.use("/api/seller", SellerRouter);
app.use("/api/users", userRouter);
export default app;
