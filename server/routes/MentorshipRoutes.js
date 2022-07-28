const express = require("express");
const router = express.Router();

// Controllers
const {
  insertMentorship,
  updateMentorship,
  deleteMentorship,
  getAllMentorships,
  getUserMentorships,
  getMentorshipById,
  addStudentToMentorship,
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
router.delete("/:id", authGuard, deleteMentorship);
router.get("/", authGuard, getAllMentorships);
router.get("/user/:id", authGuard, getUserMentorships)
router.put(
  "/:id",
  authGuard,
  mentorshipUpdateValidation(),
  validate,
  updateMentorship
);
router.put("/student/:id", authGuard, addStudentToMentorship);

module.exports = router;
