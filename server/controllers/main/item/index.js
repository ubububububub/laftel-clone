import { Router } from "express";
import { itemService, videoService } from "../../../services";
import episodesController from "./episodes";
import reviewsController from "./reviews";
import relatedController from "./related";

const itemController = Router();

itemController.get("/", async (req, res, next) => {
  try {
    const item = await itemService.getForDetail(req.params);
    const video = await videoService.getForDetail(item);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
});
itemController.use("/episodes", episodesController);
itemController.use("/reviews", reviewsController);
itemController.use("/related", relatedController);

export default itemController;
