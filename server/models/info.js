import mongoose from "mongoose";
import { infoSchema } from "./schemas";

const infoDB = mongoose.model("infoes", infoSchema);

class InfoModel {
  constructor(infoDB) {
    this.infoDB = infoDB;
  }
}

const infoModel = new InfoModel(infoDB);

export default infoModel;
