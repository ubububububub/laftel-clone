import { posterModel } from "../models";

class PosterService {
  constructor(posterModel) {
    this.posterModel = posterModel;
  }

  async create(body) {
    await this.posterModel.create(body);
  }
  async findAll() {
    const posters = await this.posterModel.findAll();
    return posters;
  }
}

const posterService = new PosterService(posterModel);

export default posterService;
