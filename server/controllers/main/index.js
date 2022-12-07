import { Router } from "express";
import { posterService, themeService, viewService } from "../../services";
import daysController from "./days";
import searchController from "./search";
import finderController from "./finder";
import themesController from "./themes";
import itemController from "./item";
import authController from "./auth";

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
mainController.use("/days", daysController);
mainController.use("/search", searchController);
mainController.use("/finder", finderController);
mainController.use("/themes", themesController);
mainController.use("/item/:_id", itemController);
mainController.use("/auth", authController);

export default mainController;
