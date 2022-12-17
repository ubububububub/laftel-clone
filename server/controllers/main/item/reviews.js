import { reviewService, videoService, starService } from "../../../services";

const reviewsController = {
  post: async (req, res, next) => {
    const { content, star } = req.body;
    let reviewAmount = 0,
      stars = 0;
    try {
      if (content) {
        reviewAmount = await reviewService.create(
          req.params,
          req.headers,
          content
        );
      }
      if (star) {
        stars = await starService.create(req.params, req.headers, star);
      }
      await videoService.updateStars(req.params, { reviewAmount, stars });
      res.status(201).end();
    } catch (err) {
      next(err);
    }
  },
  get: async (req, res, next) => {
    try {
      const reviews = await reviewService.findByItem(req.params, req.headers);
      const stars = await starService.findByItem(req.params, req.headers);
      res.status(200).json({ reviews, stars });
    } catch (err) {
      next(err);
    }
  },
  put: async (req, res, next) => {
    const { content, star } = req.body;
    try {
      if (content) await reviewService.modify(req.params, req.headers, content);
      if (star) {
        const result = await starService.modify(req.params, req.headers, star);
        await videoService.updateStars(req.params, { star });
      }
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  },
  deleteReview: async (req, res, next) => {
    try {
      const reviewAmount = await reviewService.delete(req.params, req.headers);
      await videoService.updateStars(req.params, { reviewAmount });
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  },
  deleteStar: async (req, res, next) => {
    try {
      const stars = await starService.delete(req.params, req.headers);
      await videoService.updateStars(req.params, { stars });
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
