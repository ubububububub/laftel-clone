import { themeModel } from "../models";

class ThemeService {
  constructor(themeModel) {
    this.themeModel = themeModel;
  }

  async create(themeInfo) {
    await this.themeModel.create(themeInfo);
  }
  async getForMain() {
    const themes = await this.themeModel.findAll();
    for (let i = 0; i < 5; i++) {
      await themes[i].populate("items");
    }
    return themes.slice(0, 5);
  }
  async findAll() {
    const themes = await this.themeModel.findAll();
    if (themes.length === 0) throw new Error("no content");
    return themes;
  }
  async findOne({ _id }) {
    const theme = await this.themeModel.findOne(_id);
    await theme.populate("items");
    return theme;
  }
}

const themeService = new ThemeService(themeModel);

export default themeService;
