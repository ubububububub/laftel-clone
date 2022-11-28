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
  async findAll() {
    const themes = await this.themeDB.find({});
    return themes;
  }
}

const themeModel = new ThemeModel(themeDB);

export default themeModel;
