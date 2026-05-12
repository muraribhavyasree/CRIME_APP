import express from "express";
import {
  adminLogin,
  getAllUsers,
  deleteUser,
} from "../controllers/adminController.js";

import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", adminLogin);

router.get("/users", verifyAdmin, getAllUsers);

router.delete("/user/:id", verifyAdmin, deleteUser);

export default router;