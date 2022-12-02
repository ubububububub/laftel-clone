import { Schema } from "mongoose";

const episodeSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: "videos",
      required: true,
      index: true,
    },
    number: { type: Number, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    collection: "episodes",
    timestamps: true,
  }
);

export default episodeSchema;
