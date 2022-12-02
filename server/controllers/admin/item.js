import { Router } from "express";
import { itemService, viewService } from "../../services";

const itemController = Router();

itemController.post("/", async (req, res, next) => {
  try {
    const item = await itemService.create(req.body);
    await viewService.create(item);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
itemController.get("/", async (req, res, next) => {
  try {
    const items = await itemService.findAll();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

export default itemController;
