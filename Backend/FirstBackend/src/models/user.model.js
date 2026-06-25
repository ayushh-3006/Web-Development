import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    Phone: {
      type: String,
      required: true,
    },

    Gender: {
      type: String,
      required: true,
    },

    photo: {
      url: {
        type: String,
      },

      publicid: {
        type: String,
      },
    },

    password: {
      type: String,
      required: true,
    },

    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// const User = mongoose.model(UserSchema, "User");
const User = mongoose.model("User", UserSchema); // Correct order

export default User;
