import { Router } from "express";
import { infoService } from "../services";

const mainController = Router();

mainController.get("/", (req, res, next) => {
  try {
    // 대문
    // 요일별
    // 테마별
    // 인기-조회수
  } catch (err) {
    next(err);
  }
});

export default mainController;
