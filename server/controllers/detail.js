import { Router } from "express";
import {
  itemService,
  viewService,
  videoService,
  episodeService,
  reviewService,
} from "../services";

const detailController = Router();

detailController.get("/:_id", async (req, res, next) => {
  try {
    const item = await itemService.getForDetail(req.params);
    const video = await videoService.getForDetail(item);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
});
detailController.get("/:_id/episodes", async (req, res, next) => {
  try {
    const episodes = await episodeService.findByItem(req.params);
    res.status(200).json(episodes);
  } catch (err) {
    next(err);
  }
});
detailController.put("/:_id/episodes", async (req, res, next) => {
  try {
    await viewService.updateViews(req.params);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
detailController.post("/:_id/reviews", async (req, res, next) => {
  try {
    // params 되나
    const stars = await reviewService.create(req.params, "userInfo", req.body);
    await videoService.updateStars(req.params, stars);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
detailController.get("/:_id/reviews", async (req, res, next) => {
  try {
    const reviews = await reviewService.findByItem(req.params);
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
});
detailController.get("/:_id/related", async (req, res, next) => {
  try {
    const items = await itemService.findByGenre(req.params);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default detailController;
