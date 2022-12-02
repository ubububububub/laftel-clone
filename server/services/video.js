import { videoModel } from "../models";

class VideoService {
  constructor(videoModel) {
    this.videoModel = videoModel;
  }

  async create(videoInfo) {
    await this.videoModel.create(videoInfo);
  }
}

const videoService = new VideoService(videoModel);

export default videoService;
