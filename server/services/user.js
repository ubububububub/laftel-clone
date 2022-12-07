import { userModel } from "../models";
import { hashPassword, sendMail, jwt } from "../utils";

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  //   async checkEmail({ email }) {
  //     const user = await this.userModel.findByEmail(email);
  //     return user ? false : true;
  //   }
  async join({ email, password }) {
    const hashed = await hashPassword.hash(password);
    const user = await this.userModel.create({ email, password: hashed });
    await sendMail(user.email);
  }
  async login({ email, password }) {
    const user = await this.userModel.findByEmail(email);
    if (!user) throw new Error("login failed");
    const result = await hashPassword.compare(password, user.password);
    if (!result) throw new Error("login failed");
    const accessToken = await jwt.create(
      { email: user.email, role: user.role },
      "1h"
    );
    const refreshToken = await jwt.create({}, "7d");
    await this.userModel.updateOne(email, { refreshToken });
    return { accessToken, refreshToken };
  }
}

const userService = new UserService(userModel);

export default userService;
