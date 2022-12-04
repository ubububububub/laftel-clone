import { reviewModel } from "../models";

class ReviewService {
  constructor(reviewModel) {
    this.reviewModel = reviewModel;
  }

  async create({ _id }, user, { content, star }) {
    await this.reviewModel.create({ item: _id, user, content, star });
    const reviews = await this.findByItem({ _id });
    return reviews.reduce((acc, { star }) => acc + star, 0) / reviews.length;
  }
  async findByItem({ _id }) {
    const reviews = await this.reviewModel.findByItem(_id);
    if (reviews.length === 0) throw new Error("no content");
    return reviews;
  }
}

const reviewService = new ReviewService(reviewModel);

export default reviewService;
