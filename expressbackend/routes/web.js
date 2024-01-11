import express from "express";
import StudentController from "../controllers/studentcontroller.js";
const router=express.Router();

router.get('/student',StudentController.getALlDoc)
export default router