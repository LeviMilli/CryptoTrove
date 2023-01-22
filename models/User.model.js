const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      reqired: true,
      unique: true,

    },
    email: String,
    password: String,
  },
  {

    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
