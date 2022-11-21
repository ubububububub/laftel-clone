import { Router } from "express";
import mainController from "./main";

const controller = Router();

controller.use("/main", mainController);

export default controller;
