# 🚀 SETUP INSTRUCTIONS - START HERE!

Welcome to **Maa Kamkahakya Coaching Centre**!

Your complete mock test website has been created. Follow these steps to get it running.

---

## ⚡ Quick Setup (5 Steps)

### Step 1: Open Terminal in Project Folder
```bash
# Navigate to the project
cd "roshan work"
```

### Step 2: Install Dependencies
```bash
npm install
```
⏳ *This takes 2-3 minutes. Wait for it to complete.*

### Step 3: Setup Database

**Choose ONE option:**

#### Option A: Use Local MongoDB (Easiest)
1. Download MongoDB from: https://www.mongodb.com/try/download/community
2. Install and run MongoDB
3. In your terminal, run:
   ```bash
   mongod
   ```
4. Keep this terminal window open

#### Option B: Use MongoDB Atlas (Cloud - Recommended)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Copy the connection string
5. Edit `.env` file in project folder
6. Replace `MONGODB_URI=` value with your connection string

### Step 4: Start the Server
```bash
npm run dev
```

You should see:
```
Server running on port 5000
Visit http://localhost:5000 to access the website
MongoDB connected
```

### Step 5: Open in Browser
Visit: **http://localhost:5000** ✅

---

## 🎯 First Time Setup

### Create Your Admin Account
1. Click "Register" button
2. Fill in your details:
   - Name: Your name
   - Email: your@email.com
   - Password: Choose a strong password
   - Category: Select JEE
3. Click "Register"

### Access Admin Panel
Go to: **http://localhost:5000/admin**

---

## 📝 Create Your First Test

### In Admin Panel:
1. Go to **Create Test** tab
2. Fill in details:
   - **Test Title**: "Physics Mock Test 1"
   - **Description**: "Full length physics practice"
   - **Category**: Select JEE/NEET/Government Job
   - **Total Questions**: 30
   - **Time Limit**: 180 (minutes)
   - **Total Marks**: 120

3. **Add Questions**:
   - Click "+ Add Question"
   - Enter question text
   - Add 4 options
   - Mark the correct answer
   - Set marks (4) and negative marks (1)
   - Click "Create Test"

4. **Optional**: Upload PDF materials

---

## 👨‍💼 Testing as Student

### Create Student Account
1. Click "Register"
2. Use different email
3. Fill in details
4. Category: JEE/NEET/Govt Job

### Take a Test
1. Browse available tests
2. Click "Start Test"
3. Answer questions with timer
4. Submit to see scorecard

### Ask a Doubt
1. Go to "Ask Doubts"
2. Post a question
3. It will show as "Open"
4. Admin can reply

---

## 📁 Project Files

### Key Files to Know
- `server.js` - Main application
- `package.json` - Dependencies list
- `.env` - Configuration (DO NOT SHARE)
- `models/` - Database structures
- `routes/` - API endpoints
- `public/` - Website files

### Frontend Pages
- `public/index.html` - Homepage
- `public/test.html` - Test interface
- `public/scorecard.html` - Results
- `public/doubts.html` - Ask doubts
- `public/dashboard.html` - Student dashboard
- `public/admin.html` - Admin panel

---

## 🌐 Feature Checklist

### ✅ What's Working
- [x] User registration & login
- [x] Create/manage tests
- [x] Add multiple questions
- [x] Timer functionality
- [x] Automatic scoring
- [x] Detailed scorecard
- [x] Ask doubts system
- [x] Admin panel

### 🚧 Coming Soon
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Video tutorials
- [ ] Discussion forum
- [ ] Payment integration
- [ ] Mobile app

---

## 🔑 Important Files

### Do NOT Share These:
- `.env` - Contains secret keys
- `package-lock.json` - Generated file
- `node_modules/` - Generated folder

### Always Keep These:
- All `.js` files
- All `.html` files  
- `package.json` - Share this

---

## ❓ Troubleshooting

### MongoDB Connection Error
```
Error: MongoDB connection failed
```
**Solution**: 
- Make sure MongoDB is running
- Check `.env` file for correct connection string
- Try MongoDB Atlas instead

### Port 5000 Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution**:
```bash
# Find process using port
lsof -i :5000

# Kill the process (on Mac/Linux)
kill -9 <PID>

# Or change port in .env
PORT=3000
```

### Dependencies Installation Failed
```bash
# Clear and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### CORS Error in Browser
- Check browser console
- Ensure server is running
- Try refreshing page

---

## 📚 Documentation

Read these files for more info:

1. **README.md** - Full project documentation
2. **DEPLOYMENT.md** - How to publish on internet
3. **QUICKSTART.md** - Quick reference guide
4. **PROJECT_SUMMARY.md** - Complete feature list

---

## 🌍 Deploy to Internet (Free)

### When You're Ready:
See **DEPLOYMENT.md** for steps to deploy to:
- Google Cloud (FREE!)
- Railway.app
- Heroku
- Render

Your website can be public and accessible worldwide!

---

## 🎓 Common Tasks

### Add Test Category
- Edit `models/Test.js`
- Add to enum: `enum: ['JEE', 'NEET', 'Government Job', 'YOUR_CATEGORY']`

### Change Colors
- Edit `public/css/style.css`
- Find `#667eea` and `#764ba2`
- Replace with your colors

### Update Website Name
- Edit `public/index.html`
- Change "Maa Kamkahakya Coaching Centre" to your name

### Add Contact Info
- Edit footer in HTML files
- Add your email, phone, address

---

## 🔒 Security Tips

### Before Going Live:
1. Change `JWT_SECRET` in `.env`:
   ```
   JWT_SECRET=generate-very-long-random-string-here
   ```

2. Create strong password

3. Use HTTPS (Google Cloud does this automatically)

4. Set `NODE_ENV=production`

---

## 📞 Help & Support

### If You Get Stuck:
1. Check error message carefully
2. Read the relevant documentation file
3. Check browser console (F12)
4. Google the error message
5. Ask in Node.js/Express communities

### Resources:
- Node.js Docs: nodejs.org
- Express Docs: expressjs.com
- MongoDB Docs: mongodb.com/docs
- Google Cloud Help: cloud.google.com/docs

---

## 🎯 Next Steps

1. ✅ Complete setup above
2. ✅ Create admin account
3. ✅ Create first test
4. ✅ Test as student
5. ✅ Add more tests
6. ✅ Share with students
7. ✅ Deploy to internet (see DEPLOYMENT.md)
8. ✅ Promote on social media

---

## 💡 Tips for Success

- **Start Small**: Begin with 1-2 tests
- **Quality Questions**: Make questions clear and accurate
- **Provide Explanations**: Help students understand answers
- **Get Feedback**: Ask students what to improve
- **Regular Updates**: Add new tests regularly
- **Engage Students**: Respond to doubts quickly

---

## ✨ You're All Set!

Your website is ready to empower students! 🎓

**Start with**: `npm run dev`

**Visit**: http://localhost:5000

**Good luck! 📚**

---

**Questions?** Read PROJECT_SUMMARY.md for complete details!
