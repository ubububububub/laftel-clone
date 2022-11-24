import { Router } from "express";
import itemController from "./item";
import posterController from "./poster";
import themeController from "./theme";

const adminController = Router();

adminController.use("/item", itemController);
adminController.use("/poster", posterController);
adminController.use("/theme", themeController);

export default adminController;
