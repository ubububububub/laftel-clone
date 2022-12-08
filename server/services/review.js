import { reviewModel } from "../models";
import { jwt } from "../utils";

class ReviewService {
  constructor(reviewModel) {
    this.reviewModel = reviewModel;
  }

  async create({ _id }, { accesstoken }, { content, star }) {
    const { email } = jwt.decode(accesstoken);
    await this.reviewModel.create({ item: _id, author: email, content, star });
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
