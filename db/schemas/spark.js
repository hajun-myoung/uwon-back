import mongoose from "mongoose";

const SparkSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  categoryId: {
    type: String,
    required: true,
    unique: false,
  },
  title: {
    type: String,
    required: true,
    unique: false,
  },
  summarize: {
    type: String,
    required: false,
    unique: false,
  },
  capacity: {
    type: Number,
    required: true,
    unique: false,
  },
  prize: {
    type: String,
    required: false,
    unique: false,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
  authorId: {
    type: String,
    required: true,
    unique: false,
  },
  createdAt: {
    type: Date,
    required: true,
    unique: false,
  },
});

const SparkModel = mongoose.model("Spark", SparkSchema);
export { SparkModel };
