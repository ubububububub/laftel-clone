import { episodeModel } from "../models";

class EpisodeService {
  constructor(episodeModel) {
    this.episodeModel = episodeModel;
  }

  async create(episodeInfo) {
    await this.episodeModel.create(episodeInfo);
  }
  async findByItem({ itemId }) {
    const episodes = await this.episodeModel.findByItem(itemId);
    if (episodes.length === 0) throw new Error("no content");
    return episodes;
  }
}

const episodeService = new EpisodeService(episodeModel);

export default episodeService;
