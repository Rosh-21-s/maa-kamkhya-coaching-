const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  questionImage: String,
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  correctAnswer: Number,
  explanation: String,
  marks: {
    type: Number,
    default: 1
  },
  negativeMarks: {
    type: Number,
    default: 0.25
  }
});

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['JEE', 'NEET', 'Government Job'],
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  timeLimit: {
    type: Number,
    required: true,
    default: 180 // in minutes
  },
  totalMarks: {
    type: Number,
    required: true
  },
  pdfUrl: String,
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Test', testSchema);
