const mongoose = require("mongoose");
//username:  10anuragyadav2002
//password: aaIdVx7t0zrW6okn

//mongodb+srv://10anuragyadav2002:<db_password>@cluster0.zpitu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://10anuragyadav2002:<db_password>@cluster0.zpitu.mongodb.net/CRUD-User
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
