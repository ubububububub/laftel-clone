import { Router } from "express";
import { itemService } from "../../services";

const itemController = Router();

itemController.post("/", async (req, res, next) => {
  try {
    await itemService.create(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default itemController;
