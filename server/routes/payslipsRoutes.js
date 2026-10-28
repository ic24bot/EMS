import { Router} from "express";
import { protect, protectAdmin } from "../middleware/auth";
import { createPayslip, getPayslipById, getPayslips } from "../controllers/payslipController";

const payslipRouter=Router();
payslipRouter.post("/",protect,protectAdmin,createPayslip)
payslipRouter.get("/",protect,getPayslips)
payslipRouter.get("/:id",protect,getPayslipById)

export default payslipRouter
