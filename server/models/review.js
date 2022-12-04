import mongoose from "mongoose";
import { reviewSchema } from "./schemas";

const reviewDB = mongoose.model("reviews", reviewSchema);

class ReviewModel {
  constructor(reviewDB) {
    this.reviewDB = reviewDB;
  }

  async create(reviewInfo) {
    await this.reviewDB.create(reviewInfo);
  }
  async findByItem(item) {
    const reviews = await this.reviewDB.find({ item });
    return reviews;
  }
}

const reviewModel = new ReviewModel(reviewDB);

export default reviewModel;
