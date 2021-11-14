import { Request, Response } from "express";
import { CreateUserInput } from "src/schema/user.zod.schema";
import { createUser } from "src/service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (error) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
