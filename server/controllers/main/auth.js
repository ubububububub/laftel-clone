import { Router } from "express";
import { userService } from "../../services";

const authController = Router();

// authController.get("/check", async (req, res, next) => {
//   try {
//     const result = await userService.checkEmail(req.query);
//     res.status(result ? 100 : 409).end();
//   } catch (err) {
//     next(err);
//   }
// });
authController.post("/join", async (req, res, next) => {
  try {
    await userService.join(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/login", async (req, res, next) => {
  try {
    const { accesstoken, refreshtoken } = await userService.login(req.body);
    res
      .status(200)
      .cookie("accesstoken", accesstoken, { httpOnly: true })
      .json({ refreshtoken });
  } catch (err) {
    next(err);
  }
});

export default authController;
