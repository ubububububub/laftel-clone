import { episodeModel } from "../models";

class EpisodeService {
  constructor(episodeModel) {
    this.episodeModel = episodeModel;
  }

  async create(episodeInfo) {
    await this.episodeModel.create(episodeInfo);
  }
}

const episodeService = new EpisodeService(episodeModel);

export default episodeService;
