import { Router } from "express";
import { itemService } from "../../../services";

const relatedController = Router();

relatedController.get("/", async (req, res, next) => {
  try {
    const items = await itemService.findByGenre(req.params);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default relatedController;
