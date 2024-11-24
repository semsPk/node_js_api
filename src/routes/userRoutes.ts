import express from "express";
const router = express.Router();
import {createUser} from "../controllers/userController"

// 1. Register User
router.post("/register", createUser);

export default router;
