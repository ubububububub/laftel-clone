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
    if (daily.length) await daily.populate("item");
    const total = await this.viewModel.findSome({ totalView: -1 }, 30);
    if (total.length) await total.populate("item");
    return { daily, total };
  }
}

const viewService = new ViewService(viewModel);

export default viewService;
