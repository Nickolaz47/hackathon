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
const updateMentorship = async (req, res) => {};
const deleteMentorship = async (req, res) => {};

module.exports = { insertMentorship, updateMentorship, deleteMentorship };
