export default function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.message === "no content") err.status = 204;
  res.status(err.status || 500).json({ error: err.message });
}
