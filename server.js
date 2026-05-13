const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load .env file
dotenv.config({ path: '.env' });
dotenv.config({ path: '.env.local' });
console.log('Loaded MONGODB_URI from env:', process.env.MONGODB_URI); // Debug log
console.log('NODE_ENV:', process.env.NODE_ENV);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/maa_kamkahakya';
console.log('MongoDB URI:', mongoURI); // Debug log
if (!process.env.MONGODB_URI) {
  console.warn('Warning: MONGODB_URI is not set. Using local MongoDB fallback.');
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');

  // Routes
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/tests', require('./routes/tests'));
  app.use('/api/results', require('./routes/results'));
  app.use('/api/doubts', require('./routes/doubts'));

  // Serve frontend
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));
  });

  app.get('/scorecard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scorecard.html'));
  });

  app.get('/doubts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'doubts.html'));
  });

  app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  });

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the website`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});


