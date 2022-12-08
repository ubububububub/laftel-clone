import { reviewService, videoService } from "../../../services";

const reviewsController = {
  post: async (req, res, next) => {
    try {
      const stars = await reviewService.create(
        req.params,
        req.cookies,
        req.body
      );
      await videoService.updateStars(req.params, stars);
      res.status(201).end();
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const reviews = await reviewService.findByItem(req.params);
      res.status(200).json(reviews);
    } catch (err) {
      next(err);
    }
  },
};

export default reviewsController;
