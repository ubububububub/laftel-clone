export default function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.message === "no content") err.status = 204;
  else if (err.message === "login failed") err.status = 400;
  else if (err.message === "unauthorized") err.status = 401;
  res.status(err.status || 500).json({ error: err.message });
}
