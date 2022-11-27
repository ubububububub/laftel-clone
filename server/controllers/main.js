import { Router } from "express";
import {
  itemService,
  posterService,
  themeService,
  viewService,
} from "../services";

const mainController = Router();

mainController.get("/", async (req, res, next) => {
  try {
    const posters = await posterService.findAll();
    const days = await itemService.findByDays();
    const themes = await themeService.findAll();
    const hots = await viewService.getHots();
    res.status(200).json({ posters, days, themes, hots });
  } catch (err) {
    next(err);
  }
});

export default mainController;
