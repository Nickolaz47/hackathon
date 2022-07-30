const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema(
    {
    title: String,
    author: String,
    subject: String,
    authorId: mongoose.ObjectId,
    time: String,
    date: Date,
    replies: Array,
    likes: Number,
    },
    { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
