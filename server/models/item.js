import mongoose from "mongoose";
import { itemSchema } from "./schemas";

const itemDB = mongoose.model("items", itemSchema);

class ItemModel {
  constructor(itemDB) {
    this.itemDB = itemDB;
  }

  async create(itemInfo) {
    const item = await this.itemDB.create(itemInfo);
    return item;
  }
  async findSome(condition) {
    const items = await this.itemDB.find(condition);
    return items;
  }
}

const itemModel = new ItemModel(itemDB);

export default itemModel;
