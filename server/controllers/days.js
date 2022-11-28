import { Router } from "express";
import { itemService } from "../services";

const daysController = Router();

daysController.get("/", async (req, res, next) => {
  try {
    const days = await itemService.findByDays();
    res.status(200).json(days);
  } catch (err) {
    next(err);
  }
});

export default daysController;
