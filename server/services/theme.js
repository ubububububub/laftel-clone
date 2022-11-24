import { themeModel } from "../models";

class ThemeService {
  constructor(themeModel) {
    this.themeModel = themeModel;
  }

  async create(body) {
    await this.themeModel.create(body);
  }
}

const themeService = new ThemeService(themeModel);

export default themeService;
