import { Router } from "express";
import mainController from "./main";
import adminController from "./admin";
import detailController from "./detail";

const controller = Router();

controller.use("/main", mainController);
controller.use("/admin", adminController);
controller.use("/detail", detailController);

export default controller;
