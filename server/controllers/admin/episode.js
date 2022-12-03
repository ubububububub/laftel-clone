import { Router } from "express";
import { episodeService } from "../../services";

const episodeController = Router();

episodeController.post("/", async (req, res, next) => {
  try {
    await episodeService.create(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default episodeController;
