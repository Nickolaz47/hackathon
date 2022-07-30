const express = require("express");
const router = express.Router();

// Controllers
const {
  insertQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
  getUserQuestions,
  getQuestionById,
  addReplyToQuestion,
} = require("../controllers/QuestionController");
// Middlewares
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");

// Routes
router.post(
  "/",
  authGuard,
  validate,
  insertQuestion
);
router.delete("/:id", authGuard, deleteQuestion);
router.get("/", authGuard, getAllQuestions);
router.get("/user/:id", authGuard, getUserQuestions);
router.get("/:id", authGuard, getQuestionById);
router.put(
  "/:id",
  authGuard,
  validate,
  updateQuestion
);
router.put("/reply/:id", authGuard, addReplyToQuestion);

module.exports = router;
