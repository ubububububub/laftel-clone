import { Router } from "express";
import { itemService, videoService } from "../../services";

const finderController = Router();

finderController.get("/", async (req, res, next) => {
  try {
    const items = await itemService.findByTags(req.headers);
    const modifiedItems = await videoService.thumbToImage(items);
    res.status(200).json(modifiedItems);
  } catch (err) {
    next(err);
  }
});

export default finderController;
