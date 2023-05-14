import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: true,
    unique: false,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
    unique: false,
  },
  photoUrl: {
    type: String,
    required: false,
    unique: false,
  },
});

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };
