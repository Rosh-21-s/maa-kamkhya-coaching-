# Quick Start Guide

Get your Maa Kamkahakya Coaching Centre website running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Start MongoDB

**Option A: Local**
```bash
mongod
```

**Option B: Cloud (MongoDB Atlas)**
- Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Copy connection string
- Update `.env` file

## 3️⃣ Run Development Server

```bash
npm run dev
```

## 4️⃣ Visit Website

Open browser: **http://localhost:5000**

---

## 🎓 First Steps

### Create Admin Account
1. Click "Register"
2. Fill in details
3. Access admin panel at: `http://localhost:5000/admin`

### Create First Test
1. Go to Admin → Create Test
2. Add test details
3. Add questions with options
4. Click "Create Test"

### Upload PDF Material
1. In Create Test form
2. Select PDF file
3. Click "Create Test"

### Add Sample Questions

Use this format:
```
Question: What is the SI unit of velocity?
Options: 
- m/s (Correct) ✓
- km/h
- mph
- cm/s

Marks: 4
Negative: -1
```

---

## 👨‍🎓 Student Flow

1. **Register** → Create account
2. **Browse Tests** → Filter by category (JEE/NEET/Govt Jobs)
3. **Take Test** → Answer questions with timer
4. **View Scorecard** → See results and analysis
5. **Ask Doubts** → Post questions for instructors

---

## 📁 Project Structure

```
maa-kamkahakya-coaching/
├── models/           # Database schemas
├── routes/           # API endpoints
├── public/           # Frontend files
│  ├── index.html    # Homepage
│  ├── test.html     # Test taking
│  ├── scorecard.html # Results page
│  ├── doubts.html   # Doubt asking
│  ├── dashboard.html # Student dashboard
│  ├── admin.html    # Admin panel
│  ├── css/          # Stylesheets
│  └── js/           # JavaScript
├── server.js        # Main server file
├── package.json     # Dependencies
├── .env             # Configuration
└── README.md        # Full documentation
```

---

## 🔑 Key Features

✅ **User Authentication** - Registration & Login
✅ **Mock Tests** - Multiple categories (JEE, NEET, Govt)
✅ **Timer** - Real-time countdown
✅ **PDF Upload** - Attach study materials
✅ **Scorecard** - Instant results with analysis
✅ **Doubt Asking** - Ask instructors questions
✅ **Admin Panel** - Manage tests and doubts
✅ **Leaderboard** - Track rankings

---

## 🌐 Deploy to Internet (Free)

### Google Cloud App Engine
```bash
gcloud app deploy
```
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed steps

### Railway.app
1. Connect GitHub repo
2. Set environment variables
3. Deploy with one click

### Heroku
```bash
heroku create your-app-name
git push heroku main
```

---

## 🔐 Important Files to Change

Before deploying:

1. **JWT_SECRET** in `.env`
   ```
   JWT_SECRET=generate_long_random_string_here
   ```

2. **Website Name** - Replace "Maa Kamkahakya" with your name

3. **Contact Details** - Update footer with your info

4. **MONGODB_URI** - Use your production database

---

## 📱 Accessing Different Pages

- **Homepage**: `http://localhost:5000`
- **Admin Panel**: `http://localhost:5000/admin`
- **Student Dashboard**: `http://localhost:5000/dashboard.html`
- **Doubts Page**: `http://localhost:5000/doubts`
- **Scorecard**: `http://localhost:5000/scorecard`

---

## 🆘 Common Issues

### MongoDB Connection Failed
- Ensure MongoDB is running
- Check connection string in `.env`
- Use MongoDB Atlas for cloud database

### Port 5000 Already in Use
```bash
# Kill process using port
lsof -i :5000  # Mac/Linux
# Or use different port in .env
```

### Dependencies Installation Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support Resources

- **MongoDB Docs**: [mongodb.com/docs](https://www.mongodb.com/docs/)
- **Express.js Guide**: [expressjs.com](https://expressjs.com/)
- **Node.js Docs**: [nodejs.org/docs](https://nodejs.org/docs/)
- **Google Cloud**: [cloud.google.com/docs](https://cloud.google.com/docs)

---

## 🚀 Next Level Enhancements

- Add user profile page
- Implement discussion forum
- Create video tutorials section
- Add analytics dashboard
- Mobile app version
- Live chat with instructors
- Payment integration for premium tests

---

**Happy Teaching & Learning! 📚🎓**

For full details, see [README.md](README.md) and [DEPLOYMENT.md](DEPLOYMENT.md)
