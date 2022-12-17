import { starModel } from "../models";
import { jwt } from "../utils";

class StarService {
  constructor(starModel) {
    this.starModel = starModel;
  }

  async create({ itemId }, { accesstoken }, star) {
    const { email } = jwt.decode(accesstoken);
    const star = await this.starModel.findByItemAuthor(itemId, email);
    if (star) throw new Error("conflict");
    await this.starModel.create({
      item: itemId,
      author: email,
      star,
    });
    const result = await this.avgStars(itemId);
    return result;
  }
  async findByItem({ itemId }, { accesstoken }) {
    const stars = await this.starModel.findByItem(itemId);
    if (stars.length === 0) return {};
    if (accesstoken) {
      const { email } = jwt.decode(accesstoken);
      const star = await this.starModel.findByItemAuthor(itemId, email);
      return {
        user: star ? star : {},
        stars: star
          ? stars.filter(({ _id }) => String(star._id) !== String(_id))
          : stars,
      };
    }
    return { user: {}, stars };
  }
  async modify({ itemId }, { accesstoken }, star) {
    const { email } = jwt.decode(accesstoken);
    await this.starModel.updateOne(itemId, email, { star });
    const result = await this.avgStars(itemId);
    return result;
  }
  async avgStars(itemId) {
    const stars = await this.starModel.findByItem(itemId);
    if (stars.length === 0) return { stars: 0 };
    return Number(
      (stars.reduce((acc, { star }) => acc + star, 0) / stars.length).toFixed(2)
    );
  }
  async delete({ itemId }, { accesstoken }) {
    const { email } = jwt.decode(accesstoken);
    await this.starModel.deleteOne(itemId, email);
    const result = await this.avgStars(itemId);
    return result;
  }
}

const starService = new StarService(starModel);

export default starService;
