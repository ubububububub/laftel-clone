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
  async findOne(_id) {
    const review = await this.reviewDB.findOne({ _id });
    return review;
  }
  async updateOne(_id, reviewInfo) {
    await this.reviewDB.updateOne({ _id }, reviewInfo);
  }
  async deleteOne(_id) {
    await this.reviewDB.deleteOne({ _id });
  }
  async findByItemAuthor(item, author) {
    const review = await this.reviewDB.findOne({ item, author });
    return review;
  }
}

const reviewModel = new ReviewModel(reviewDB);

export default reviewModel;
