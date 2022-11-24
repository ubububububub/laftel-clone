import { Router } from "express";
import { themeService } from "../../services";

const themeController = Router();

themeController.post("/", async (req, res, next) => {
  try {
    await themeService.create(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default themeController;
