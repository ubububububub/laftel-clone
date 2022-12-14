import { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "items",
      required: true,
      index: true,
    },
    author: { type: String, required: true },
    content: { type: String, required: false },
    star: { type: Number, required: true },
    likes: { type: Number, required: true, default: 0 },
  },
  {
    collection: "reviews",
    timestamps: true,
  }
);

export default reviewSchema;
