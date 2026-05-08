const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  studentName: String,
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  },
  questionId: String,
  doubtTitle: {
    type: String,
    required: true
  },
  doubtText: {
    type: String,
    required: true
  },
  attachmentUrl: String,
  category: {
    type: String,
    enum: ['JEE', 'NEET', 'Government Job', 'General'],
    default: 'General'
  },
  status: {
    type: String,
    enum: ['open', 'answered', 'resolved'],
    default: 'open'
  },
  reply: String,
  repliedBy: String,
  repliedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Doubt', doubtSchema);
