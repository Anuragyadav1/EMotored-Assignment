// const express = require("express");
// const { addProfile, getProfiles } = require("../controller/profileController");

// const router = express.Router();

// router.post("/add", addProfile);
// router.get("/all", getProfiles);

// module.exports = router;

const express = require("express");
const {
  addProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
} = require("../controller/profileController");

const router = express.Router();

router.post("/add", addProfile);
router.get("/all", getProfiles);
router.put("/update/:id", updateProfile);
router.delete("/delete/:id", deleteProfile);

module.exports = router;

