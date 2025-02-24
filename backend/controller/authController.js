const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// Updated Login User Function
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
    //   console.log(email,password)
  
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {

        return res.status(400).json({ message: "Invalid credentials." });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2m" });

      const userData = { given_name: user.name, email: user.email }; // Object for localStorage

      res.status(200).json({ 
        message: "Login successful",
        user: userData,
        token
      });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  };
  

module.exports = { registerUser, loginUser };
