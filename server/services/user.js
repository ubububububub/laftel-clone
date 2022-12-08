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
  async join({ email, password, isLaftel, isInfo, isEvent }) {
    const hashed = await hashPassword.hash(password);
    const user = await this.userModel.create({
      email,
      password: hashed,
      isLaftel,
      isInfo,
      isEvent,
    });
    await sendMail(user.email);
  }
  async login({ email, password }) {
    const user = await this.findByEmail(email);
    if (!user) throw new Error("login failed");
    const result = await hashPassword.compare(password, user.password);
    if (!result) throw new Error("login failed");
    const accesstoken = await jwt.create(
      { email: user.email, role: user.role },
      "1h"
    );
    const refreshtoken = await jwt.create({}, "7d");
    await this.userModel.updateOne(email, { refreshtoken });
    return { accesstoken, refreshtoken };
  }
  async findByEmail(email) {
    const user = await this.userModel.findByEmail(email);
    return user;
  }
}

const userService = new UserService(userModel);

export default userService;
