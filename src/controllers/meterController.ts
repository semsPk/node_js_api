import { Request, Response } from "express";
import { ElectricityMeter, UserMeterAccess } from "../models";

// 2. Add Meter
export const addMeter = async (req: Request, res: Response) => {
  const { userId, meterName } = req.body;

  try {
    let meter = await ElectricityMeter.findOne({ where: { meterName } });
    if (!meter) {
      meter = await ElectricityMeter.create({ meterName });
    }

    const [access, created] = await UserMeterAccess.findOrCreate({
      where: { userId, meterName },
    });

    res.json({ access, created });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// 3. Delete Meter
export const deleteMeter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, meterName } = req.body;
  try {
    const rowsDeleted = await UserMeterAccess.destroy({
      where: { userId, meterName },
    });
    if (!rowsDeleted) {
      res.status(404).json({ message: "Meter access not found" });
      return;
    }
    res.json({ message: "Meter access deleted" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// 4. Toggle Notification
export const toggleNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, meterName } = req.body;

  try {
    const access = await UserMeterAccess.findOne({
      where: { userId, meterName },
    });

    if (!access) {
      res.status(404).json({ message: "Access not found" });
      return;
    }

    // Toggle notification
    access.notification = !access.notification;
    await access.save();

    res.json({ access });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
