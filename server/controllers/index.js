import { Router } from "express";
import mainController from "./main";
import adminController from "./admin";
import daysController from "./days";

const controller = Router();

controller.use("/main", mainController);
controller.use("/admin", adminController);
controller.use("/days", daysController);

export default controller;
