import { SparkModel } from "../schemas/spark.js";

class Spark {
  static async create({ NEW_SPARK }) {
    const createdSpark = await SparkModel.create(NEW_SPARK);
    return createdSpark;
  }
  static async findByDate({ createdAt }) {
    const foundSparks = await SparkModel.find({ createdAt });
    return foundSparks;
  }
  static async findByAuthor({ authorId }) {
    const foundSparks = await SparkModel.find({ authorId });
    return foundSparks;
  }
  static async findAll() {
    const sparks = SparkModel.find({});
    return sparks;
  }
  static async update({ uid, fieldToUpdate, newValue }) {
    const filter = { uid };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedSpark = await SparkModel.findOneAndUpdate(
      filter,
      update,
      option
    );

    return updatedSpark;
  }
}

export { Spark };
