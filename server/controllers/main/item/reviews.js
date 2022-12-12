import { reviewService, videoService } from "../../../services";

const reviewsController = {
  post: async (req, res, next) => {
    try {
      const result = await reviewService.create(
        req.params,
        req.headers,
        req.body
      );
      await videoService.updateStars(req.params, result);
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
  put: async (req, res, next) => {
    try {
      const result = await reviewService.modify(
        req.params,
        req.headers,
        req.body
      );
      await videoService.updateStars(req.params, result);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await reviewService.delete(req.params, req.headers);
      await videoService.updateStars(req.params, result);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  },
  patch: async (req, res, next) => {
    try {
      await reviewService.incLikes(req.params);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  },
};

export default reviewsController;
