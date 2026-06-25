// import User from "../models/user.model";
import User from "../models/user.model.js"; // Added .js

export const RegisterUser = async (req, res) => {
  try {
    const { fullname, email, password, phone, gender, dob } = req.body;

    if (!fullname || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All fields required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "email already registered" });
      return;
    }

    // create new user and complete registration will do this tomorrow
    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const loginUser = (req, res) => {
  res.json({ message: "login successfull from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "LogoutUser successfull from controller" });
};
