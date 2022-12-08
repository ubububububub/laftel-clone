import { reviewModel } from "../models";
import { jwt } from "../utils";

class ReviewService {
  constructor(reviewModel) {
    this.reviewModel = reviewModel;
  }

  async create({ _id }, { accesstoken }, { content, star }) {
    const { email } = jwt.decode(accesstoken);
    await this.reviewModel.create({ item: _id, author: email, content, star });
    const result = await this.avgStars(_id);
    return result;
  }
  async findByItem({ _id }) {
    const reviews = await this.reviewModel.findByItem(_id);
    if (reviews.length === 0) throw new Error("no content");
    return reviews;
  }
  async modify({ itemId, reviewId }, { accesstoken }, { content, star }) {
    await this.checkAuthor(reviewId, accesstoken);
    const reviewInfo = {};
    if (content !== undefined) reviewInfo.content = content;
    if (star !== undefined) reviewInfo.star = star;
    await this.reviewModel.updateOne(reviewId, reviewInfo);
    const result = await this.avgStars(itemId);
    return result;
  }
  async checkAuthor(reviewId, accesstoken) {
    const review = await this.reviewModel.findOne(reviewId);
    const { email } = jwt.decode(accesstoken);
    if (review.author !== email) throw new Error("forbidden");
  }
  async avgStars(_id) {
    const reviews = await this.findByItem({ _id });
    return {
      stars: reviews.reduce((acc, { star }) => acc + star, 0) / reviews.length,
      reviewAmount: reviews.length,
    };
  }
  async delete({ itemId, reviewId }, { accesstoken }) {
    await this.checkAuthor(reviewId, accesstoken);
    await this.reviewModel.deleteOne(reviewId);
    const result = await this.avgStars(itemId);
    return result;
  }
}

const reviewService = new ReviewService(reviewModel);

export default reviewService;
