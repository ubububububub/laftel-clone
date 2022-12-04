import { Router } from "express";
import itemController from "./item";
import posterController from "./poster";
import themeController from "./theme";
import episodeController from "./episode";

const adminController = Router();

adminController.use("/item", itemController);
adminController.use("/poster", posterController);
adminController.use("/theme", themeController);
adminController.use("/episode", episodeController);

export default adminController;
