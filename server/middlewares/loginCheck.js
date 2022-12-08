import { jwt } from "../utils";
import { userService } from "../services";

export default async function loginCheck(req, res, next) {
  const { accesstoken } = req.cookies;
  if (!accesstoken) return next(new Error("unauthorized"));
  const { refreshtoken } = req.headers;
  try {
    if (refreshtoken) {
      const { email, role } = jwt.decode(accesstoken);
      const user = await userService.findByEmail(email);
      if (!user || user.refreshtoken !== refreshtoken)
        return next(new Error("unauthorized"));
      await jwt.verify(refreshtoken);
      const newToken = await jwt.create({ email, role }, "1h");
      res.cookie("accesstoken", newToken, { httpOnly: true });
      return next();
    }
    await jwt.verify(accesstoken);
    next();
  } catch (err) {
    err.message = "unauthorized";
    next(err);
  }
}
