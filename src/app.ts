import express, { Express, Response, urlencoded } from "express";
import logger from "./utils/logger";
import { config } from "dotenv";
import cors from "cors";
import { connect } from "./utils/connect";
config();

import userRouter from "./routes/user.route";

const app: Express = express();
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());

app.use("/check", (_, res: Response) => {
  res.sendStatus(200);
});

app.use("/user", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connect();
  logger.info(`Sever running at http://localhost:${port}`);
});
