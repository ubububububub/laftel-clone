import { Router } from "express";
import {
  itemService,
  posterService,
  themeService,
  viewService,
  videoService,
} from "../services";

const mainController = Router();

mainController.get("/", async (req, res, next) => {
  try {
    const posters = await posterService.findAll();
    const themes = await themeService.getForMain();
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
    const modifiedItems = await videoService.thumbToImage(items);
    res.status(200).json(modifiedItems);
  } catch (err) {
    next(err);
  }
});
mainController.get("/themes", async (req, res, next) => {
  try {
    const themes = await themeService.findAll();
    const withImages = await videoService.getThreeImages(themes);
    res.status(200).json(withImages);
  } catch (err) {
    next(err);
  }
});
mainController.get("/themes/:_id", async (req, res, next) => {
  try {
    const theme = await themeService.findOne(req.params);
    const withVideoInfo = await videoService.getVideoInfo(theme);
    res.status(200).json(withVideoInfo);
  } catch (err) {
    next(err);
  }
});

export default mainController;
