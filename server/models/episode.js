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
}

const episodeModel = new EpisodeModel(episodeDB);

export default episodeModel;
