import { jwt } from "../utils";

export default async function checkAccess(req, res, next) {
  const { accesstoken } = req.headers;
  if (!accesstoken) return next(new Error("unauthorized"));
  try {
    await jwt.verify(accesstoken);
    next();
  } catch (err) {
    err.message = "unauthorized";
    next(err);
  }
}
