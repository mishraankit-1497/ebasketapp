import express from "express";
import {
  userAuth,
  getUserProfile,
  registerUser,
  updateProfile,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", userAuth);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateProfile);

router.route("/:id").delete(protect, admin, deleteUser);

export default router;
