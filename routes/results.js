const express = require('express');
const Result = require('../models/Result');
const Test = require('../models/Test');

const router = express.Router();

// Submit test results
router.post('/submit', async (req, res) => {
  try {
    const { userId, testId, answers, timeSpent } = req.body;

    // Calculate marks
    const test = await Test.findById(testId);
    let totalMarks = 0;
    const processedAnswers = [];

    answers.forEach(answer => {
      const question = test.questions.find(q => q._id.toString() === answer.questionId);
      if (question) {
        const isCorrect = question.correctAnswer === answer.selectedAnswer;
        const marks = isCorrect ? question.marks : -question.negativeMarks;
        totalMarks += marks > 0 ? marks : (marks < 0 ? marks : 0);
        
        processedAnswers.push({
          questionId: answer.questionId,
          selectedAnswer: answer.selectedAnswer,
          isCorrect,
          marksObtained: marks
        });
      }
    });

    const percentage = (totalMarks / test.totalMarks) * 100;

    const result = new Result({
      userId,
      testId,
      answers: processedAnswers,
      totalMarksObtained: totalMarks,
      percentage,
      timeSpent,
      status: 'completed'
    });

    await result.save();

    res.status(201).json({
      message: 'Test submitted successfully',
      result,
      scorecard: {
        totalMarks: test.totalMarks,
        marksObtained: totalMarks,
        percentage: percentage.toFixed(2),
        correctAnswers: processedAnswers.filter(a => a.isCorrect).length,
        totalQuestions: test.totalQuestions,
        timeSpent: timeSpent,
        timeLimitInMinutes: test.timeLimit
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user results
router.get('/user/:userId', async (req, res) => {
  try {
    const results = await Result.find({ userId: req.params.userId })
      .populate('testId', 'title category totalMarks')
      .sort({ createdAt: -1 });
    
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific result
router.get('/:resultId', async (req, res) => {
  try {
    const result = await Result.findById(req.params.resultId)
      .populate('userId', 'name email')
      .populate('testId');
    
    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get leaderboard for a test
router.get('/leaderboard/:testId', async (req, res) => {
  try {
    const results = await Result.find({ testId: req.params.testId })
      .populate('userId', 'name email')
      .sort({ totalMarksObtained: -1, timeSpent: 1 })
      .limit(100);

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
