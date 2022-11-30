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
mainController.get("/days", async (req, res, next) => {
  try {
    const days = await itemService.findByDays();
    res.status(200).json(days);
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
mainController.get("/finder", async (req, res, next) => {
  try {
    const items = await itemService.findByTag(req.headers);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default mainController;
