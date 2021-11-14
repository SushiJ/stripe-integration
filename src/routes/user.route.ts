import { Request, Response, Router } from "express";
import { createUserHandler } from "src/controller/user.controller";
import validate from "src/middleware/validateResource";
import { createUserSchema } from "src/schema/user.zod.schema";

const router = Router();

router.get("/test", (_: Request, res: Response) => {
  return res.json("success");
});

router.post("/new", validate(createUserSchema), createUserHandler);

export default router;
