import { viewModel } from "../models";

class ViewService {
  constructor(viewModel) {
    this.viewModel = viewModel;
  }

  async create(item) {
    await this.viewModel.create({ item });
  }
  async getHots() {
    const daily = await this.viewModel.findSome({ dailyView: -1 }, 12);
    for (let i = 0; i < daily.length; i++) {
      await daily[i].populate("item");
    }
    const total = await this.viewModel.findSome({ totalView: -1 }, 30);
    for (let i = 0; i < total.length; i++) {
      await total[i].populate("item");
    }
    return { daily, total };
  }
}

const viewService = new ViewService(viewModel);

export default viewService;
