import mongoose from "mongoose";
import { posterSchema } from "./schemas";

const posterDB = mongoose.model("posters", posterSchema);

class PosterModel {
  constructor(posterDB) {
    this.posterDB = posterDB;
  }
  async create(posterInfo) {
    await this.posterDB.create(posterInfo);
  }
}

const posterModel = new PosterModel(posterDB);

export default posterModel;
