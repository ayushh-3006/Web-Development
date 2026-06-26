import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
     email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
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
