import User from "../models/user.model.js";

export const register = async (req, res, err) => {
  try {
    const { email, password, username } = req.body;
    const newUser = new User({
      username,
      email,
      password,
    });
    console.log(newUser);

    await newUser.save();
    res.json(`registrando ${newUser}`);
  } catch (err) {
    console.log(err);
    console.log("error en el auth.controller.reg");
  }
};

export const login = (req, res, err) => {
  res.send("login");
};
