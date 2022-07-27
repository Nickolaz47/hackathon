const mongoose = require("mongoose");
const { Schema } = mongoose;

const mentorshipSchema = new Schema(
  {
    title: String,
    subject: String,
    description: String,
    mentorId: mongoose.ObjectId,
    mentorName: String,
    numberDesiredStudents: Number,
    students: Array,
    price: Number,
    duration: Number,
    time: String,
    date: Date,
  },
  { timestamps: true }
);

const Mentorship = mongoose.model("Mentorship", mentorshipSchema);

module.exports = Mentorship;
