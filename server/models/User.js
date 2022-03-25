const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "please add your email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/,
        "please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minlength: 6,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExire: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
