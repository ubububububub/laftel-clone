import { Router } from "express";
import { posterService } from "../../services";

const posterController = Router();

posterController.post("/", async (req, res, next) => {
  try {
    await posterService.create(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default posterController;
