import { episodeModel } from "../models";

class EpisodeService {
  constructor(episodeModel) {
    this.episodeModel = episodeModel;
  }

  async create(episodeInfo) {
    await this.episodeModel.create(episodeInfo);
  }
  async findByItem({ _id }) {
    const episodes = await this.episodeModel.findByItem(_id);
    if (episodes.length === 0) throw new Error("no content");
    return episodes;
  }
}

const episodeService = new EpisodeService(episodeModel);

export default episodeService;
