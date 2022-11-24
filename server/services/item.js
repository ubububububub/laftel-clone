import { itemModel, viewModel } from "../models";

class ItemService {
  constructor(itemModel, viewModel) {
    this.itemModel = itemModel;
    this.viewModel = viewModel;
  }

  async create(body) {
    const item = await this.itemModel.create(body);
    await this.viewModel.create({ item });
  }
}

const itemService = new ItemService(itemModel, viewModel);

export default itemService;
