import User from "../models/user.model.js";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, dob, gender, password } = req.body;
    if (!fullName || !email || !password || !gender || !dob || !phone) {
      // res.status(400).json({ message: "All feilds Required"});
      // return;
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registred");
      error.statusCode = 409;
      return next(error);
    }

    const photoUrl =
      "https:placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}";

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
    console.log(error.message);
    next();
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("all fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      const error = new Error("email not registered");
      error.statusCode = 404;
      return next(error);
    }

    if (password !== existinguser.password) {
      const error = new Error("incorrect password");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({
      message: "welcome back",
      data: existinguser,
    });

  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
