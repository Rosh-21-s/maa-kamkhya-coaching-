# Maa Kamkahakya Coaching Centre - Mock Test Website

A comprehensive mock test platform for JEE, NEET, and Government Job exams with timer functionality, PDF support, scorecard, and doubt asking features.

## Features

✅ **User Authentication** - Registration and login for students
✅ **Mock Tests** - Practice tests for JEE, NEET, and Government Jobs
✅ **Timer Functionality** - Real-time countdown timer during exams
✅ **PDF Support** - Upload and attach practice materials
✅ **Automatic Scoring** - Instant scorecard generation with detailed analysis
✅ **Doubt Asking** - Ask doubts from instructors and get replies
✅ **Question Navigator** - Easy question navigation with status indicators
✅ **Leaderboard** - Rank-based performance tracking
✅ **Admin Panel** - Manage tests, questions, and doubt replies

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Upload**: Multer
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing

## Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

## Installation

### 1. Clone or Download the Project

```bash
cd "roshan work"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Edit `.env` file and set:
```
MONGODB_URI=mongodb://localhost:27017/maa_kamkahakya
PORT=5000
JWT_SECRET=your_secure_jwt_secret_key
NODE_ENV=development
```

### 4. Create Required Directories

```bash
mkdir -p public/uploads/pdfs
```

### 5. Start MongoDB

Make sure MongoDB is running:
```bash
# On Windows
mongod

# On Mac/Linux
brew services start mongodb-community
# or
sudo systemctl start mongodb
```

### 6. Start the Development Server

```bash
npm run dev
```

Or for production:
```bash
npm start
```

The website will be available at `http://localhost:5000`

## Project Structure

```
maa-kamkahakya-coaching/
├── models/
│   ├── User.js              # User schema
│   ├── Test.js              # Test and questions schema
│   ├── Result.js            # Results/scorecard schema
│   └── Doubt.js             # Doubt/question schema
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── tests.js             # Test management routes
│   ├── results.js           # Results routes
│   └── doubts.js            # Doubt management routes
├── public/
│   ├── index.html           # Homepage
│   ├── test.html            # Test taking page
│   ├── scorecard.html       # Results scorecard
│   ├── doubts.html          # Ask doubts page
│   ├── css/
│   │   └── style.css        # Main stylesheet
│   ├── js/
│   │   └── script.js        # Frontend JavaScript
│   └── uploads/
│       └── pdfs/            # Uploaded PDFs
├── server.js                # Main server file
├── package.json             # Dependencies
├── .env                     # Environment variables
└── README.md               # This file
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new student
- `POST /api/auth/login` - Login student

### Tests
- `GET /api/tests` - Get all tests
- `GET /api/tests/:id` - Get specific test
- `POST /api/tests` - Create test (admin)
- `PUT /api/tests/:id` - Update test (admin)
- `DELETE /api/tests/:id` - Delete test (admin)

### Results
- `POST /api/results/submit` - Submit test and get scorecard
- `GET /api/results/user/:userId` - Get user's results
- `GET /api/results/:resultId` - Get specific result
- `GET /api/results/leaderboard/:testId` - Get test leaderboard

### Doubts
- `POST /api/doubts` - Post a doubt
- `GET /api/doubts` - Get all doubts (admin)
- `GET /api/doubts/student/:studentId` - Get student's doubts
- `GET /api/doubts/:doubtId` - Get specific doubt
- `PUT /api/doubts/:doubtId/reply` - Reply to doubt (admin)
- `PUT /api/doubts/:doubtId/resolve` - Mark as resolved
- `DELETE /api/doubts/:doubtId` - Delete doubt

## Usage Guide

### For Students

1. **Register/Login**: Create an account or login with credentials
2. **Browse Tests**: Select from available tests in JEE, NEET, or Govt Jobs categories
3. **Take Test**: 
   - Click "Start Test"
   - Use the question navigator on the left
   - Set your answer by clicking options
   - Monitor the timer at the top
   - Submit when complete
4. **View Scorecard**: 
   - See your results with marks, percentage, and analysis
   - View correct/wrong/unattempted breakdown
5. **Ask Doubts**: 
   - Go to "Ask Doubts" section
   - Post your question with title and description
   - Instructors will reply with answers
   - Track status: Open → Answered → Resolved

### For Admin (Instructors)

1. **Create Tests**:
   - Access admin panel
   - Add test details (title, category, time, marks)
   - Upload PDF materials
   - Add questions with options and correct answers

2. **Manage Doubts**:
   - Review all student doubts
   - Reply to open doubts
   - Mark as resolved after clarification

3. **Monitor Performance**:
   - View leaderboards
   - Track student progress
   - Analyze test performance metrics

## Adding Sample Tests

To add sample tests to the database, you can use MongoDB Compass or create a script:

```javascript
// Sample test data structure
{
  "title": "JEE Main Physics Mock Test 1",
  "description": "Practice test for JEE Main Physics",
  "category": "JEE",
  "totalQuestions": 30,
  "timeLimit": 180,
  "totalMarks": 120,
  "pdfUrl": "/uploads/pdfs/physics-notes.pdf",
  "questions": [
    {
      "questionText": "What is the SI unit of velocity?",
      "options": [
        { "text": "m/s", "isCorrect": true },
        { "text": "km/h", "isCorrect": false },
        { "text": "mph", "isCorrect": false },
        { "text": "cm/s", "isCorrect": false }
      ],
      "correctAnswer": 0,
      "explanation": "The SI unit of velocity is meter per second (m/s)",
      "marks": 4,
      "negativeMarks": 1
    }
  ]
}
```

## Publishing to Google (Free Hosting)

### Option 1: Using Google Cloud Platform

1. **Setup GCP Account**:
   - Go to https://cloud.google.com/free
   - Create a free account with $300 credit

2. **Deploy to App Engine**:
   ```bash
   # Install Google Cloud CLI
   npm install -g @google-cloud/cli
   
   # Login to Google Cloud
   gcloud auth login
   
   # Create new project
   gcloud projects create maa-kamkahakya-coaching
   
   # Deploy
   gcloud app deploy
   ```

### Option 2: Using MongoDB Atlas (Cloud Database)

1. **Setup MongoDB Atlas**:
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free account
   - Create cluster
   - Get connection string

2. **Update .env**:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

### Option 3: Using Free Hosting Services

**Heroku** (has limited free tier):
```bash
npm install -g heroku
heroku login
heroku create maa-kamkahakya-coaching
git push heroku main
```

**Vercel** (for frontend):
1. Upload to GitHub
2. Connect GitHub repo to Vercel
3. Deploy

**Railway.app** (free tier available):
1. Connect GitHub repo
2. Deploy with one click

## SEO Optimization for Google

1. **Add Meta Tags** in `index.html`:
   ```html
   <meta name="description" content="Free mock tests for JEE, NEET, and Government Jobs">
   <meta name="keywords" content="JEE, NEET, Mock Tests, Practice, Competitive Exams">
   <meta name="author" content="Maa Kamkahakya Coaching Centre">
   ```

2. **Submit to Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add your website
   - Submit sitemap

3. **Create Sitemap** (`sitemap.xml`):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yoursite.com</loc>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://yoursite.com/tests</loc>
       <priority>0.8</priority>
     </url>
   </urlset>
   ```

4. **Enable HTTPS**: Use free SSL from Let's Encrypt

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env
- Use MongoDB Atlas if local installation issues

### Port Already in Use
```bash
# Change port in .env or find process using port
netstat -ano | findstr :5000  # Windows
lsof -i :5000  # Mac/Linux
```

### File Upload Issues
- Create `public/uploads/pdfs/` directory
- Ensure write permissions
- Check multer configuration

## Security Notes

⚠️ **Important for Production**:
1. Change JWT_SECRET in .env to a strong random string
2. Enable HTTPS/SSL
3. Set NODE_ENV=production
4. Use MongoDB Atlas with strong password
5. Implement rate limiting
6. Add input validation
7. Enable CORS properly for your domain
8. Keep dependencies updated

## Future Enhancements

- Live chat with instructors
- Video tutorials
- Progress analytics dashboard
- Mobile app
- Offline test mode
- Adaptive learning paths
- Performance predictions
- Discussion forum

## Support & Contact

For issues, suggestions, or support:
- Email: support@maakamkahakya.com
- Website: www.maakamkahakya.com

## License

MIT License - Feel free to use this project

## Contributors

- Maa Kamkahakya Coaching Centre Team

---

**Happy Learning! 🎓**
