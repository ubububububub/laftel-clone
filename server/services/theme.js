import { themeModel } from "../models";

class ThemeService {
  constructor(themeModel) {
    this.themeModel = themeModel;
  }

  async create(body) {
    await this.themeModel.create(body);
  }
  async findAll() {
    const themes = await this.themeModel.findAll();
    if (themes.length) await themes.populate("items");
    return themes;
  }
}

const themeService = new ThemeService(themeModel);

export default themeService;
