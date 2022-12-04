import { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "items",
      required: true,
      index: true,
    },
    user: {
      type: { nickname: String, email: String, image: String },
      required: true,
    },
    content: { type: String, required: true },
    star: { type: Number, required: true },
    likes: { type: Number, required: true, default: 0 },
  },
  {
    collection: "reviews",
    timestamps: true,
  }
);

export default reviewSchema;
