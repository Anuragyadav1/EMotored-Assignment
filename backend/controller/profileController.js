// const Profile = require("../model/Profile");

// // Add a new profile
// const addProfile = async (req, res) => {
//   try {
//     const { name, email, phone, instagram, youtube, address, city, zipCode } = req.body;

//     // Ensure required fields are present
//     if (!name || !email || !phone || !address || !city || !zipCode) {
//       return res.status(400).json({ message: "Please provide all required fields." });
//     }

//     // Check if email already exists
//     const existingProfile = await Profile.findOne({ email });
//     if (existingProfile) {
//       return res.status(400).json({ message: "Email already exists" });
//     }

//     const newProfile = new Profile({ name, email, phone, instagram, youtube, address, city, zipCode });

//     await newProfile.save();
//     res.status(201).json({ message: "Profile added successfully", profile: newProfile });
//   } catch (error) {
//     res.status(500).json({ message: "Error adding profile", error: error.message });
//   }
// };

// // Get all profiles
// const getProfiles = async (req, res) => {
//   try {
//     const profiles = await Profile.find();
//     res.status(200).json(profiles);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching profiles", error });
//   }
// };

// module.exports = { addProfile, getProfiles };





const Profile = require("../model/Profile");

// Add a new profile
const addProfile = async (req, res) => {
  try {
    const { name, email, phone, instagram, youtube, address, city, zipCode } = req.body;

    if (!name || !email || !phone || !address || !city || !zipCode) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const existingProfile = await Profile.findOne({ email });
    if (existingProfile) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newProfile = new Profile({ name, email, phone, instagram, youtube, address, city, zipCode });

    await newProfile.save();
    res.status(201).json({ message: "Profile added successfully", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Error adding profile", error: error.message });
  }
};

// Get all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profiles", error });
  }
};

// Update a profile
const updateProfile = async (req, res) => {
  try {
    const { name, email, phone, instagram, youtube, city } = req.body;

    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, instagram, youtube, city },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", profile: updatedProfile });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};

// Delete a profile
const deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

    if (!deletedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting profile", error });
  }
};

module.exports = { addProfile, getProfiles, updateProfile, deleteProfile };
