require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const profileRoutes = require("./route/profileRoutes");
const authRoutes = require("./route/authRoutes");


const app = express();

// Middleware
app.use(cors());
// Parse JSON bodies (replaces bodyParser.json())
app.use(express.json());

// Parse URL-encoded bodies (replaces bodyParser.urlencoded())
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use("/api/users", profileRoutes);

//auth routes
app.use("/api/users/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
