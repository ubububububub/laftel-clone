import { posterModel } from "../models";

class PosterService {
  constructor(posterModel) {
    this.posterModel = posterModel;
  }

  async create(body) {
    await this.posterModel.create(body);
  }
}

const posterService = new PosterService(posterModel);

export default posterService;
