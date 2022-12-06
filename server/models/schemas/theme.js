import { Schema } from "mongoose";

const themeSchema = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: "items", required: true }],
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    collection: "themes",
    timestamps: true,
  }
);

export default themeSchema;
