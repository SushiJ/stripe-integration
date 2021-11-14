import { object, ref, string } from "joi";

export const createUserSchema = object({
  username: string(),
  password: string()
    .required()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repeat_password: ref("password"),
  email: string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
}).with("password", "repeat_password");
