const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
 
const BASE_URL = require("../config/base_url");

//for forgot password handling
const crypto = require("crypto");
const nodemailer = require("nodemailer");



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

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email }); 

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Debugging logs
    //console.log("entered login Password:", password);
    //console.log("Stored Hashed Password:", user.password);

    // Correct password comparison using bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password);
    //console.log("Password Match:", isMatch);
    

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    const userData = { given_name: user.name, email: user.email }; // Object for localStorage

    res.status(200).json({ 
      message: "Login successful",
      user: userData,
      token
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Error logging in", error });
  }
};


  //forgot password 
  const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString("hex");
      const hashedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
      user.resetPasswordToken = hashedResetToken
      // const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

      //user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiry 
      await user.save();

      // Fetch the user again to verify the token is stored
      // const updatedUser = await User.findOne({ email });
      // console.log("Updated user with reset token:", updatedUser);
      //console.log("check...")
      // Send reset email (using Nodemailer)
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        to: user.email,
        from: process.env.EMAIL_USER,
        subject: "Password Reset Request",
        text: `You requested a password reset. Click the link below:\n\n
        ${BASE_URL}/reset-password/${hashedResetToken}`
      };
  
      await transporter.sendMail(mailOptions);
      res.json({ message: "Password reset link sent to email" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };


//reset password
const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body; // here token is hashedToken so no need to hashed
    //here token is hashedToken
    //encrypted token stored in database
    //so first we need to encrypt the token
    //console.log("Received Token:", token);

    //console.log("reset Password:", password);

    //const encToken = crypto.createHash('sha256').update(token).digest('hex')
    const user = await User.findOne({resetPasswordToken:token}) //token is already hashed so no need to hashed
    //console.log(user)
   
    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    // Check if reset token is expired
    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({ message: "Reset token has expired. Please request a new one." });
    }

    //const newHashedPassword = await bcrypt.hash(password, 10);;
    //console.log("reseted Hashed Password:", newHashedPassword);

    // Update user details
    user.password = password;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save(); // Save the updated user

    // Ensure latest user data is fetched after password update
    //const updatedUser = await User.findById(user._id);
    //console.log("Updated Hashed Password in DB (Refetched):", updatedUser.password);

    res.status(200).json({ message: "Password reset successful" });

  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Error resetting password", error });
  }
};


module.exports = { registerUser, loginUser, forgotPassword, resetPassword };
