const express = require('express');
const Doubt = require('../models/Doubt');

const router = express.Router();

// Post a new doubt
router.post('/', async (req, res) => {
  try {
    const { studentId, studentName, testId, questionId, doubtTitle, doubtText, category } = req.body;

    const doubt = new Doubt({
      studentId,
      studentName,
      testId,
      questionId,
      doubtTitle,
      doubtText,
      category,
      status: 'open'
    });

    await doubt.save();
    res.status(201).json({ message: 'Doubt posted successfully', doubt });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all doubts (for admin)
router.get('/', async (req, res) => {
  try {
    const { status, category } = req.query;
    let query = {};

    if (status) query.status = status;
    if (category) query.category = category;

    const doubts = await Doubt.find(query)
      .populate('studentId', 'name email')
      .sort({ createdAt: -1 });

    res.json(doubts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get student's doubts
router.get('/student/:studentId', async (req, res) => {
  try {
    const doubts = await Doubt.find({ studentId: req.params.studentId })
      .sort({ createdAt: -1 });

    res.json(doubts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific doubt
router.get('/:doubtId', async (req, res) => {
  try {
    const doubt = await Doubt.findById(req.params.doubtId)
      .populate('studentId', 'name email');

    if (!doubt) {
      return res.status(404).json({ message: 'Doubt not found' });
    }

    res.json(doubt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Reply to doubt (Admin)
router.put('/:doubtId/reply', async (req, res) => {
  try {
    const { reply, repliedBy } = req.body;

    const doubt = await Doubt.findByIdAndUpdate(
      req.params.doubtId,
      {
        reply,
        repliedBy,
        repliedAt: Date.now(),
        status: 'answered'
      },
      { new: true }
    );

    res.json({ message: 'Reply posted successfully', doubt });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark doubt as resolved
router.put('/:doubtId/resolve', async (req, res) => {
  try {
    const doubt = await Doubt.findByIdAndUpdate(
      req.params.doubtId,
      { status: 'resolved' },
      { new: true }
    );

    res.json({ message: 'Doubt marked as resolved', doubt });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete doubt
router.delete('/:doubtId', async (req, res) => {
  try {
    await Doubt.findByIdAndDelete(req.params.doubtId);
    res.json({ message: 'Doubt deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
