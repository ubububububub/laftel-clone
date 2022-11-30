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
  async findByTitle({ keyword }) {
    const items = await this.itemModel.findSome({
      title: new RegExp(`(${keyword})`),
    });
    if (items.length === 0) throw new Error("could not find");
    return items;
  }
  async findByTag({ _id, genre, xgenre, tags, xtags }) {
    const condition = {
      genre: genre || xgenre ? {} : { $exists: true },
      tags: tags || xtags ? {} : { $exists: true },
    };
    if (genre) condition.genre.$all = decode(genre);
    if (xgenre) condition.genre.$nin = decode(xgenre);
    if (tags) condition.tags.$all = decode(tags);
    if (xtags) condition.tags.$nin = decode(xtags);
    if (_id) {
      const items = await this.itemModel.findSome({
        _id: { $lt: _id },
        ...condition,
      });
      return items;
    } else {
      const items = await this.itemModel.findSome(condition);
      return { count: items.length, items: items.slice(0, 19) };
    }
  }
}

const itemService = new ItemService(itemModel);

export default itemService;

function decode(str) {
  const result = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i];
    if (str[i] === " " || i === str.length - 1) {
      result.push(Buffer.from(temp, "base64").toString("utf8"));
      temp = "";
    }
  }
  return result;
}
