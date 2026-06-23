import User from "../models/user.model";

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
  } catch (error) {}
};

export const loginUser = (req, res) => {
  res.json({ message: "login successfull from controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "LogoutUser successfull from controller" });
};
