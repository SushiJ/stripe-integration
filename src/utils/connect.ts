import mongoose from "mongoose";
import logger from "./logger";
export const connect = async () => {
  const dbUri = process.env.DB_URI!;

  try {
    mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error(" DB connection failed");
    process.exit(1);
  }
};
