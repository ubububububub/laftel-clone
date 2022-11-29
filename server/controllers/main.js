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
    const themes = await themeService.findAll();
    const hots = await viewService.getHots();
    res.status(200).json({ posters, themes, hots });
  } catch (err) {
    next(err);
  }
});
mainController.get("/search", async (req, res, next) => {
  try {
    const items = await itemService.findByTitle(req.query);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default mainController;
