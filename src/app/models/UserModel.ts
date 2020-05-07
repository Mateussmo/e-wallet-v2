import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

interface UserInterface extends Document {
  email: string;
  password_hashed: string;
}

const User = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password_hashed: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

User.pre<UserInterface>("save", function save(next) {
  if (this.password_hashed) {
    this.password_hashed = bcrypt.hashSync(this.password_hashed, 10);
  }
  return next();
});

export default model<UserInterface>("Users", User);
