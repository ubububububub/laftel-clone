import { infoModel } from "../models";

class InfoService {
  constructor(infoModel) {
    this.infoModel = infoModel;
  }
}

const infoService = new InfoService(infoModel);

export default infoService;
