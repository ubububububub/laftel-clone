import { Router } from "express";
import { itemService, videoService } from "../../../services";
import episodesController from "./episodes";
import reviewsController from "./reviews";
import relatedController from "./related";
import { loginCheck } from "../../../middlewares";

const itemController = Router();

itemController.get("/:itemId", async (req, res, next) => {
  try {
    const item = await itemService.getForDetail(req.params);
    const video = await videoService.getForDetail(item);
    res.status(200).json({ video, episodes });
  } catch (err) {
    next(err);
  }
});
itemController.get("/:itemId/episodes", episodesController.get);
itemController.put("/:itemId/episodes", episodesController.put);
itemController.post("/:itemId/reviews", loginCheck, reviewsController.post);
itemController.get("/:itemId/reviews", reviewsController.get);
itemController.put("/:itemId/reviews/:reviewId", loginCheck, reviewsController.put);
itemController.delete("/:itemId/reviews/:reviewId", loginCheck, reviewsController.delete);
itemController.get("/:itemId/related", relatedController.get);

export default itemController;
