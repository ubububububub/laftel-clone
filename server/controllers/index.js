import { Router } from "express";
import mainController from "./main";
import adminController from "./admin";

const controller = Router();

controller.use("/main", mainController);
controller.use("/admin", adminController);

export default controller;
