import { reviewModel } from "../models";
import { jwt } from "../utils";

class ReviewService {
  constructor(reviewModel) {
    this.reviewModel = reviewModel;
  }

  async create({ itemId }, { accesstoken }, { content, star }) {
    const { email } = jwt.decode(accesstoken);
    await this.reviewModel.create({
      item: itemId,
      author: email,
      content,
      star,
    });
    const result = await this.avgStars(itemId);
    return result;
  }
  async findByItem({ itemId }) {
    const reviews = await this.reviewModel.findByItem(itemId);
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
  async avgStars(itemId) {
    const reviews = await this.findByItem({ itemId });
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
