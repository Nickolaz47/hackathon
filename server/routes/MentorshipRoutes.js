const express = require("express");
const router = express.Router();

// Controllers
const {
  insertMentorship,
  updateMentorship,
} = require("../controllers/MentorshipController");
// Middlewares
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const {
  mentorshipCreateValidation,
  mentorshipUpdateValidation,
} = require("../middlewares/mentorshipValidations");
// Routes
router.post(
  "/",
  authGuard,
  mentorshipCreateValidation(),
  validate,
  insertMentorship
);
router.put(
  "/:id",
  authGuard,
  mentorshipUpdateValidation(),
  validate,
  updateMentorship
);

module.exports = router;
