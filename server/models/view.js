import mongoose from "mongoose";
import { viewSchema } from "./schemas";

const viewDB = mongoose.model("views", viewSchema);

class ViewModel {
  constructor(viewDB) {
    this.viewDB = viewDB;
  }
  async create(viewInfo) {
    await this.viewDB.create(viewInfo);
  }
}

const viewModel = new ViewModel(viewDB);

export default viewModel;
