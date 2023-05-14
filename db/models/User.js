import { UserModel } from "../schemas/user";

class User {
  static async create({ NEW_USER }) {
    const createdUser = await UserModel.create(NEW_USER);
    return createdUser;
  }
  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }
  static async findById({ id }) {
    const user = await UserModel.findOne({ id });
    return user;
  }
}

export { User };
