const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ errors: [{ msg: "This email already exists" }] });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();

    // Create token
    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "5h" });

    // Remove password before sending
    const { password: _, ...userData } = newUser._doc;

    res.status(200).json({ success: [{ msg: "Registered successfully!" }], user: userData, token });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }], error });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ errors: [{ msg: "Email and Password incorrect" }] });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Email and Password incorrect" }] });
    }

    // Create token
    const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_KEY, { expiresIn: "5h" });

    // Remove password before sending
    const { password: _, ...userData } = foundUser._doc;

    res.status(200).json({ success: [{ msg: "Login successfully!" }], user: userData, token });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: "Server error" }], error });
  }
};
