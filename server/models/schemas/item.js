import { Schema } from "mongoose";

const itemSchema = new Schema(
  {
    image: { type: String, required: "item has image:String" },
    thumbnail: { type: String, required: "item has thumnail:String" },
    title: { type: String, required: "item has title:String" },
    story: {
      type: String,
      required: "item has story:String",
      default: "줄거리 정보가 없는 작품이에요.",
    },
    genre: { type: [String], required: "item has genre:[String]" },
    tags: { type: [String], required: "item has tags:[String]" },
    releaseType: {
      type: String,
      required: false,
      enum: ["TVA", "극장판", "OVA", "라이트애니", "기타"],
    },
    updateDay: {
      type: String,
      required: false,
      enum: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    },
    isOnly: Boolean,
    isDubbing: Boolean,
    isUncut: Boolean,
    isAd: Boolean,
    isAdult: Boolean,
    stars: { type: Number, required: true, default: 0 },
  },
  {
    collection: "items",
    timestamps: true,
  }
);

export default itemSchema;
