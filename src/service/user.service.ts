//Service which directly interacts with Model
import { omit } from "lodash";
import { UserInput, userModel } from "src/model/user.model";

export async function createUser(input: UserInput) {
  try {
    const user = userModel.create(input);
    return omit((await user).toJSON(), "password");
  } catch (e) {
    throw new Error(e);
  }
}
