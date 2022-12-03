import { videoModel } from "../models";

class VideoService {
  constructor(videoModel) {
    this.videoModel = videoModel;
  }

  async create(videoInfo) {
    await this.videoModel.create(videoInfo);
  }
  async getThreeImages(themes) {
    await themes.map(async ({ items, ...theme }) => {
      theme.images = [];
      for (let i = 0; i < 3; i++) {
        const { image } = await this.videoModel.findByItem(theme.items[i]);
        theme.images.push(image);
      }
      return theme;
    });
    return themes;
  }
  async getVideoInfo(theme) {
    theme.items = await theme.items.map(async ({ _id, title, genre }) => {
      const video = await this.videoModel.findByItem(_id);
      return { title, genre, ...video };
    });
    return theme;
  }
}

const videoService = new VideoService(videoModel);

export default videoService;
