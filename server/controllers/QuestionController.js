const User = require("../models/User");
const Question = require("../models/Question");
const mongoose = require("mongoose");

// Post a question
const insertQuestion = async (req, res) => {
    const {
        title,
        subject,
        time,
        date,
        replies,
        likes,
    } = req.body;

  // Get the request user
    const reqUser = req.user;
    const user = await User.findById(reqUser._id);

  // Create a question
    const newQuestion = await Question.create({
        title,
        author: user.name,
        subject,
        authorId: user._id,
        time,
        date,
        replies,
        likes,
    });

  // If question was created successfully, returns data
  if (!newQuestion) {
    res.status(422).json({
      errors: "Houve um problema, por favor tente novamente mais tarde.",
    });
    return;
  }

  res.status(201).json(newQuestion);
};
const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    subject,
    time,
    date,
    replies,
    likes,
  } = req.body;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  const question = await Question.findById(id);

  // Check if question exists
  if (!question) {
    res.status(422).json({ errors: ["Question não encontrada!"] });
    return;
  }

  // Check if the request user is the same of the question
  const reqUser = req.user;

  if (reqUser._id !== question.authorId) {
    res.status(401).json({ errors: ["Acesso negado!"] });
  }

  if (title) {
    question.title = title;
  }

  if (subject) {
    question.subject = subject;
  }

  if (replies) {
    question.replies = replies;
  }

  if (likes) {
    question.likes = likes;
  }

  if (time) {
    question.time = time;
  }

  if (date) {
    question.date = date;
  }

  await question.save();

  res.status(200).json({ question, message: "Questão atualizada!" });
};
const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  const reqUser = req.user;
  const question = await Question.findById(mongoose.Types.ObjectId(id));

  // Check if question exists
  if (!question) {
    res.status(404).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  // Check if question belongs to user
  if (!question.authorId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  await Question.findByIdAndDelete(question._id);

  res
    .status(200)
    .json({ id: question._id, message: "Questão excluída com sucesso." });
};

// Get all questions
const getAllQuestions = async (req, res) => {
  const questions = await Question.find({})
    .sort([["createdAt", -1]])
    .exec();
  res.status(200).json(questions);
};

// Get user questions
const getUserQuestions = async (req, res) => {
  const { id } = req.params;
  const questions = await Question.find({ userId: id })
    .sort({ createdAt: -1 })
    .exec();
  res.status(200).json(questions);
};

// Get question by id
const getQuestionById = async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  const question = await Question.findById(mongoose.Types.ObjectId(id));

  // Check if question exists
  if (!question) {
    res.status(422).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  res.status(200).json(question);
};

// Add student to question
const addReplyToQuestion = async (req, res) => {
  const { id } = req.params;
  const { newReply } = req.body;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  const reqUser = req.user;
  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password"
  );
  const question = await Question.findById(mongoose.Types.ObjectId(id));

  // Check if question exists
  if (!question) {
    res.status(404).json({ errors: ["Questão não encontrada!"] });
    return;
  }

  // Add reply to replies array
  question.replies.push({
    userId: user._id,
    userName: user.name,
    reply: newReply
  });

  await question.save();

  res.status(200).json({
    questionId: id,
    userId: user._id,
    message: "Resposta enviada com sucesso!",
  });
};

module.exports = {
  insertQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
  getUserQuestions,
  getQuestionById,
  addReplyToQuestion,
};

