const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  instagram: { type: String },
  youtube: { type: String },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
