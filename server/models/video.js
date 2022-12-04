import mongoose from "mongoose";
import { videoSchema } from "./schemas";

const videoDB = mongoose.model("videos", videoSchema);

class VideoModel {
  constructor(videoDB) {
    this.videoDB = videoDB;
  }

  async create(videoInfo) {
    await this.videoDB.create(videoInfo);
  }
  async findByItem(item) {
    const video = await this.videoDB.findOne({ item });
    return video;
  }
  async updateOne(item, videoInfo) {
    await this.videoDB.updateOne({ item }, videoInfo);
  }
}

const videoModel = new VideoModel(videoDB);

export default videoModel;
