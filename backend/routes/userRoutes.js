import express from "express";
import {
  userAuth,
  getUserProfile,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", userAuth);
router.route("/profile").get(protect, getUserProfile);
router.route("/profile/").put(protect, updateProfile);

export default router;
