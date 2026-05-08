const express = require('express');
const Test = require('../models/Test');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure multer for PDF uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/pdfs/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname).toLowerCase() === '.pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// Get all tests
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    
    if (category) {
      query.category = category;
    }

    const tests = await Test.find(query).select('-questions');
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific test with questions
router.get('/:id', async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create test (Admin only)
router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    const { title, description, category, totalQuestions, timeLimit, totalMarks, questions } = req.body;

    const test = new Test({
      title,
      description,
      category,
      totalQuestions,
      timeLimit,
      totalMarks,
      pdfUrl: req.file ? `/uploads/pdfs/${req.file.filename}` : null,
      questions: JSON.parse(questions || '[]')
    });

    await test.save();
    res.status(201).json({ message: 'Test created successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update test
router.put('/:id', upload.single('pdf'), async (req, res) => {
  try {
    const { title, description, category, totalQuestions, timeLimit, totalMarks, questions } = req.body;

    const updateData = {
      title,
      description,
      category,
      totalQuestions,
      timeLimit,
      totalMarks,
      updatedAt: Date.now()
    };

    if (req.file) {
      updateData.pdfUrl = `/uploads/pdfs/${req.file.filename}`;
    }

    if (questions) {
      updateData.questions = JSON.parse(questions);
    }

    const test = await Test.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json({ message: 'Test updated successfully', test });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete test
router.delete('/:id', async (req, res) => {
  try {
    await Test.findByIdAndDelete(req.params.id);
    res.json({ message: 'Test deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
