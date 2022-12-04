import mongoose from "mongoose";
import { episodeSchema } from "./schemas";

const episodeDB = mongoose.model("episodes", episodeSchema);

class EpisodeModel {
  constructor(episodeDB) {
    this.episodeDB = episodeDB;
  }

  async create(episodeInfo) {
    await this.episodeDB.create(episodeInfo);
  }
  async findByItem(item) {
    const episodes = await this.episodeDB.find({ item });
    return episodes;
  }
}

const episodeModel = new EpisodeModel(episodeDB);

export default episodeModel;
