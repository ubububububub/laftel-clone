import { Router } from "express";
import { itemService, videoService } from "../../../services";
import episodesController from "./episodes";
import reviewsController from "./reviews";
import relatedController from "./related";

const itemController = Router();

itemController.get("/:_id", async (req, res, next) => {
  try {
    const item = await itemService.getForDetail(req.params);
    const video = await videoService.getForDetail(item);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
});
itemController.get("/:_id/episodes", episodesController.get);
itemController.put("/:_id/episodes", episodesController.put);
itemController.post("/:_id/reviews", reviewsController.post);
itemController.get("/:_id/reviews", reviewsController.get);
itemController.get("/:_id/related", relatedController.get);

export default itemController;
