import mongoose from "mongoose";
import { userSchema } from "./schemas";

const userDB = mongoose.model("users", userSchema);

class UserModel {
  constructor(userDB) {
    this.userDB = userDB;
  }

  async findByEmail(email) {
    const user = await this.userDB.findOne({ email });
    return user;
  }
  async create(userInfo) {
    const user = await this.userDB.create(userInfo);
    return user;
  }
  async updateOne(email, userInfo) {
    await this.userDB.updateOne({ email }, userInfo);
  }
}

const userModel = new UserModel(userDB);

export default userModel;
