const User = require("../models/User");
const Mentorship = require("../models/Mentorship");
const mongoose = require("mongoose");

// Post a mentorship
const insertMentorship = async (req, res) => {
  const {
    title,
    subject,
    description,
    numberDesiredStudents,
    price,
    duration,
    time,
    date,
  } = req.body;

  // Get the request user
  const reqUser = req.user;
  const user = await User.findById(reqUser._id);

  // Create a mentorship
  const newMentorship = await Mentorship.create({
    title,
    subject,
    description,
    mentorId: user._id,
    mentorName: user.name,
    numberDesiredStudents,
    price,
    duration,
    time,
    date,
  });

  // If mentorship was created successfully, returns data
  if (!newMentorship) {
    res.status(422).json({
      errors: "Houve um problema, por favor tente novamente mais tarde.",
    });
    return;
  }

  res.status(201).json(newMentorship);
};
const updateMentorship = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    subject,
    description,
    numberDesiredStudents,
    price,
    duration,
    time,
    date,
  } = req.body;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  const mentorship = await Mentorship.findById(id);

  // Check if mentorship exists
  if (!mentorship) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  // Check if the request user is the same of the mentorship
  const reqUser = req.user;

  if (!mentorship.mentorId.equals(reqUser._id)) {
    res.status(401).json({ errors: ["Acesso negado!"] });
    return;
  }

  if (title) {
    mentorship.title = title;
  }

  if (subject) {
    mentorship.subject = subject;
  }

  if (description) {
    mentorship.description = description;
  }

  if (numberDesiredStudents) {
    mentorship.numberDesiredStudents = numberDesiredStudents;
  }

  if (price) {
    mentorship.price = price;
  }

  if (duration) {
    mentorship.duration = duration;
  }

  if (time) {
    mentorship.time = time;
  }

  if (date) {
    mentorship.date = date;
  }

  await mentorship.save();

  res.status(200).json({ mentorship, message: "Mentoria atualizada!" });
};
const deleteMentorship = async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  const reqUser = req.user;
  const mentorship = await Mentorship.findById(mongoose.Types.ObjectId(id));

  // Check if mentorship exists
  if (!mentorship) {
    res.status(404).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  // Check if mentorship belongs to user
  if (!mentorship.mentorId.equals(reqUser._id)) {
    res
      .status(422)
      .json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    return;
  }

  await Mentorship.findByIdAndDelete(mentorship._id);

  res
    .status(200)
    .json({ id: mentorship._id, message: "Mentoria excluída com sucesso." });
};

// Get all mentorships
const getAllMentorships = async (req, res) => {
  const mentorships = await Mentorship.find({})
    .sort([["createdAt", -1]])
    .exec();
  res.status(200).json(mentorships);
};

// Get user mentorships
const getUserMentorships = async (req, res) => {
  const { id } = req.params;
  const mentorships = await Mentorship.find({ userId: id })
    .sort({ createdAt: -1 })
    .exec();
  res.status(200).json(mentorships);
};

// Get mentorship by id
const getMentorshipById = async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  const mentorship = await Mentorship.findById(mongoose.Types.ObjectId(id));

  // Check if mentorship exists
  if (!mentorship) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  res.status(200).json(mentorship);
};

// Add student to mentorship
const addStudentToMentorship = async (req, res) => {
  const { id } = req.params;

  // Check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  const reqUser = req.user;
  const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select(
    "-password"
  );
  const mentorship = await Mentorship.findById(mongoose.Types.ObjectId(id));

  // Check if mentorship exists
  if (!mentorship) {
    res.status(404).json({ errors: ["Mentoria não encontrada!"] });
    return;
  }

  // Check if the user is the owner of the mentorship
  if (mentorship.mentorId.equals(user._id)) {
    res
      .status(422)
      .json({
        errors: [
          "Você é o dono da mentoria, não pode ser adionado como estudante!",
        ],
      });
    return;
  }

  // Check if user already enters in the mentorship
  const studentObject = mentorship.students.filter(
    (obj) => obj.userId !== user._id
  )[0];
  if (studentObject) {
    res.status(422).json({ errors: ["Você já está na mentoria!"] });
    return;
  }

  // Put student info in array
  mentorship.students.push({
    userId: user._id,
    userName: user.name,
    userProfileImage: user.profileImage,
  });

  await mentorship.save();

  res.status(200).json({
    mentorshipId: id,
    userId: user._id,
    message: "Você foi incluído na mentoria!",
  });
};

module.exports = {
  insertMentorship,
  updateMentorship,
  deleteMentorship,
  getAllMentorships,
  getUserMentorships,
  getMentorshipById,
  addStudentToMentorship,
};
