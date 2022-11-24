import mongoose from "mongoose";
import { themeSchema } from "./schemas";

const themeDB = mongoose.model("themes", themeSchema);

class ThemeModel {
  constructor(themeDB) {
    this.themeDB = themeDB;
  }
  async create(themeInfo) {
    await this.themeDB.create(themeInfo);
  }
}

const themeModel = new ThemeModel(themeDB);

export default themeModel;
