import { videoModel } from "../models";

class VideoService {
  constructor(videoModel) {
    this.videoModel = videoModel;
  }

  async create(videoInfo) {
    await this.videoModel.create(videoInfo);
  }
  async thumbToImage(items) {
    if (items.items) items.items = await modifyItems(items.items);
    else items = await modifyItems(items);
    return items;
  }
  async getThreeImages(themes) {
    const withImages = [];
    for (const { _id, items, title } of themes) {
      const images = [];
      for (let i = 0; i < 3; i++) {
        const { image } = await this.videoModel.findByItem(items[i]);
        images.push(image);
      }
      withImages.push({ _id, images, title });
    }
    return withImages;
  }
  async getVideoInfo(theme) {
    const withVideoInfo = {
      title: theme.title,
      description: theme.description,
      items: [],
    };
    for (const { _id, title, genre } of theme.items) {
      const { image, story, stars } = await this.videoModel.findByItem(_id);
      withVideoInfo.items.push({ _id, title, genre, image, story, stars });
    }
    return withVideoInfo;
  }
  async getForDetail(item) {
    const { image, story, stars, reviewAmount } =
      await this.videoModel.findByItem(item._id);
    return { ...item, image, story, stars, reviewAmount };
  }
  async updateStars({ itemId }, stars) {
    await this.videoModel.updateOne(itemId, stars);
  }
}

const videoService = new VideoService(videoModel);

export default videoService;

async function modifyItems(items) {
  const result = [];
  for (const { _id, title, isOnly, isAdult } of items) {
    const { image } = await videoModel.findByItem(_id);
    result.push({ _id, title, isOnly, isAdult, image });
  }
  return result;
}
