import express from "express";
import {
  addMeter,
  deleteMeter,
  toggleNotification,
} from "../controllers/meterController";

const router = express.Router();

// 2. Add Meter
router.post("/add-meter", addMeter);

// 3. Delete Meter
router.delete("/delete-meter", deleteMeter);

// 4. Toggle Notification
router.put("/toggle-notification", toggleNotification);

export default router;
