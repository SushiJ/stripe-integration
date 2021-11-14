import express from "express";
import cors from "cors";
import { connect } from "./utils/connect";
import logger from "./utils/logger";
import { config } from "dotenv";

config();
const app = express();

app.use(cors());
app.use("/check", (_, res) => {
  res.sendStatus(200);
});
const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";
app.listen(port, host, () => {
  connect();
  logger.info(`Server started at http://${host}:${port}`);
});
