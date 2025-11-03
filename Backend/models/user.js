const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema(
  {
    userId: {
            type: String,
            required: true,
            unique: true,
        },
    firstName: {
      required: [true, "First name is required"],
      type: String,
    },
    lastName: {
      required: [true, "Last name is required"],
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Hei buddy Password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    timestamps: true,
  }
);

//Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;