import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "videos",
      required: true,
      index: true,
    },
    user: {
      type: { nickname: String, email: String, image: String },
      required: true,
    },
    star: { type: Number, required: true },
    likes: { type: Number, required: true },
  },
  {
    collection: "posts",
    timestamps: true,
  }
);

export default postSchema;
