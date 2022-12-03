import { Router } from "express";
import { itemService, viewService, videoService } from "../../services";

const itemController = Router();

itemController.post("/", async (req, res, next) => {
  const { image, story, ...body } = req.body;
  try {
    const item = await itemService.create(body);
    await viewService.create(item);
    await videoService.create({ item, image, story });
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
// itemController.get("/", async (req, res, next) => {
//   try {
//     const items = await itemService.findAll();
//     res.status(200).json(items);
//   } catch (err) {
//     next(err);
//   }
// });

export default itemController;
