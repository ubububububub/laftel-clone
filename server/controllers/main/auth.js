import { Router } from "express";
import { userService } from "../../services";
import { jwt } from "../../utils";

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
    res.status(200).json({ accesstoken, refreshtoken });
  } catch (err) {
    next(err);
  }
});
authController.get("/refresh", async (req, res, next) => {
  const { accesstoken, refreshtoken } = req.headers;
  const { email, role } = jwt.decode(accesstoken);
  try {
    const user = await userService.findByEmail(email);
    if (!user || user.refreshtoken !== refreshtoken)
      return next(new Error("unauthorized"));
    await jwt.verify(refreshtoken);
    const newToken = await jwt.create({ email, role }, "1h");
    res.status(200).json({ accesstoken: newToken });
  } catch (err) {
    err.message = "unauthorized";
    next(err);
  }
});

export default authController;
