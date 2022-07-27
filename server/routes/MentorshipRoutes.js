const express = require("express");
const router = express.Router();

// Controllers
const { insertMentorship } = require("../controllers/MentorshipController");
// Middlewares
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const {
  mentorshipCreateValidation,
} = require("../middlewares/mentorshipValidations");
// Routes
router.post(
  "/",
  authGuard,
  mentorshipCreateValidation(),
  validate,
  insertMentorship
);

module.exports = router;
