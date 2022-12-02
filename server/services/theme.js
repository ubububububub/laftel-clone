import { themeModel } from "../models";

class ThemeService {
  constructor(themeModel) {
    this.themeModel = themeModel;
  }

  async create(themeInfo) {
    await this.themeModel.create(themeInfo);
  }
  async findAll() {
    const themes = await this.themeModel.findAll();
    for (let i = 0; i < themes.length; i++) {
      await themes[i].populate("items");
    }
    return themes;
  }
}

const themeService = new ThemeService(themeModel);

export default themeService;
