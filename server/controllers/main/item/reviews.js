import { Router } from "express";
import { reviewService, videoService } from "../../../services";

const reviewsController = Router();

reviewsController.post("/", async (req, res, next) => {
  try {
    // params 되나
    const stars = await reviewService.create(req.params, "userInfo", req.body);
    await videoService.updateStars(req.params, stars);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
reviewsController.get("/", async (req, res, next) => {
  try {
    const reviews = await reviewService.findByItem(req.params);
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
});

export default reviewsController;
