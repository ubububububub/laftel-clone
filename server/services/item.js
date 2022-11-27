import { itemModel } from "../models";

class ItemService {
  constructor(itemModel) {
    this.itemModel = itemModel;
  }

  async create(body) {
    const item = await this.itemModel.create(body);
    return item;
  }
  async findByDays() {
    const items = await this.itemModel.findSome({
      updateDay: { $exists: true },
    });
    if (items.length === 0) return {};
    const days = {
      mon: [],
      tue: [],
      wed: [],
      thu: [],
      fri: [],
      sat: [],
      sun: [],
    };
    items.forEach((item) => days[item.updateDay].push(item));
    return days;
  }
}

const itemService = new ItemService(itemModel);

export default itemService;
