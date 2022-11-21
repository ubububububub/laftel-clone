import express from "express";
import cors from "cors";
import createError from "http-errors";
import controller from "./controllers";
import { errorHandler } from "./middlewares";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", controller);

app.use((req, res, next) => next(createError(404)));
app.use(errorHandler);

export default app;
