import { Router } from "express";
import { itemService } from "../../services";

const searchController = Router();

searchController.get("/", async (req, res, next) => {
  try {
    const items = await itemService.findByTitle(req.query);
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default searchController;
