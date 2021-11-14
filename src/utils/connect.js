import mongoose from "mongoose";
import logger from "./logger";

export async function connect() {
  try {
    const dbUri = process.env.DB_URI;
    mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (e) {
    logger.error("DB connection failed");
    process.exit(1);
  }
}
