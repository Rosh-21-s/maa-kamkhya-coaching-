# Deployment Guide - Maa Kamkahakya Coaching Centre

This guide will help you deploy your mock test website for free on Google Cloud and publish it publicly.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Setup](#local-setup)
3. [Deploy to Google Cloud](#deploy-to-google-cloud)
4. [Deploy to Other Free Platforms](#deploy-to-other-free-platforms)
5. [Make Website SEO-Friendly](#make-website-seo-friendly)
6. [Custom Domain Setup](#custom-domain-setup)

---

## Prerequisites

Before starting, ensure you have:

### Required Software
- **Node.js** - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Download from [git-scm.com](https://git-scm.com/)
- **MongoDB** - Either local or use MongoDB Atlas (free)
- **Code Editor** - VS Code recommended

### Accounts You'll Need
- **Google Account** (for Google Cloud)
- **GitHub Account** (for version control)
- **MongoDB Atlas Account** (for cloud database - free)

---

## Local Setup

### Step 1: Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Install MongoDB

**Option A: Local MongoDB**
- Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- Install and start MongoDB service

**Option B: MongoDB Atlas (Recommended for Production)**
- Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create free account
- Create a free cluster
- Get connection string

### Step 3: Install Project Dependencies

```bash
cd "roshan work"
npm install
```

### Step 4: Create Upload Directory

```bash
mkdir -p public/uploads/pdfs
```

### Step 5: Configure Environment

Edit `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/maa_kamkahakya
PORT=5000
JWT_SECRET=use_a_strong_random_string_here
NODE_ENV=development
```

### Step 6: Start Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Visit: `http://localhost:5000`

---

## Deploy to Google Cloud

### Step 1: Create Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Click "Select a Project" → "New Project"
3. Name it: `maa-kamkahakya-coaching`
4. Click "Create"

### Step 2: Install Google Cloud CLI

```bash
# Download from https://cloud.google.com/sdk/docs/install

# Verify installation
gcloud --version
```

### Step 3: Login to Google Cloud

```bash
gcloud auth login
gcloud config set project maa-kamkahakya-coaching
```

### Step 4: Create app.yaml

Create `app.yaml` in project root:

```yaml
runtime: nodejs18

env: standard

instances: 1

handlers:
  - url: /.*
    script: auto

env_variables:
  MONGODB_URI: "your_mongodb_atlas_connection_string"
  PORT: 8080
  JWT_SECRET: "your_strong_secret_key"
  NODE_ENV: "production"

skip_files:
  - ^node_modules$
```

### Step 5: Deploy to App Engine

```bash
gcloud app deploy
```

**Note**: First deployment may take 5-10 minutes

After deployment:
```bash
gcloud app browse
```

Your website will be at: `https://maa-kamkahakya-coaching.appspot.com`

---

## Deploy to Other Free Platforms

### Option 1: Heroku (Limited Free Tier)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create maa-kamkahakya-coaching

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_connection_string
heroku config:set JWT_SECRET=your_secret_key

# Push to Heroku
git push heroku main

# Open in browser
heroku open
```

### Option 2: Railway.app (Free Tier Available)

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Connect GitHub repository
4. Set environment variables
5. Deploy

### Option 3: Render

1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Create new Web Service
4. Connect your repository
5. Configure environment variables
6. Deploy

### Option 4: Replit

1. Go to [replit.com](https://replit.com)
2. Create new Repl
3. Choose Node.js
4. Upload your files
5. Run the server

---

## Make Website SEO-Friendly

### Step 1: Add Meta Tags

Edit `public/index.html` and add in `<head>`:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Free mock tests for JEE, NEET, and Government Job exams. Practice with our comprehensive test platform. Perfect for 11th, 12th, SSC, Banking, Railway exams.">
<meta name="keywords" content="mock tests, JEE, NEET, government jobs, SSC, banking, railway, practice tests, competitive exams">
<meta name="author" content="Maa Kamkahakya Coaching Centre">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="Maa Kamkahakya Coaching Centre - Mock Tests">
<meta property="og:description" content="Free comprehensive mock tests for competitive exams">
<meta property="og:type" content="website">
<meta name="theme-color" content="#667eea">
```

### Step 2: Create robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api

Sitemap: https://yourdomain.com/sitemap.xml
```

### Step 3: Create Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2026-05-07</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-05-07</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/doubts</loc>
    <lastmod>2026-05-07</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>
```

### Step 4: Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your website URL
4. Verify ownership
5. Submit sitemap
6. Submit robots.txt

### Step 5: Optimize Performance

- Enable GZIP compression
- Minimize CSS and JavaScript
- Optimize images
- Use CDN for static files

---

## Custom Domain Setup

### Step 1: Buy Domain

Buy domain from:
- [godaddy.com](https://www.godaddy.com)
- [namecheap.com](https://www.namecheap.com)
- [domain.com](https://www.domain.com)

### Step 2: Configure DNS

For Google Cloud App Engine:

1. In Google Cloud Console, go to App Engine → Settings
2. Copy the IP address
3. In domain registrar:
   - Add A record pointing to Google Cloud IP
   - Add CNAME record if needed

### Step 3: Enable Custom Domain on App Engine

```bash
gcloud app custom-domains create yourdomain.com
```

---

## Publishing Your Website

### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Maa Kamkahakya Coaching Centre"
git remote add origin https://github.com/yourusername/maa-kamkahakya-coaching.git
git push -u origin main
```

### Step 2: Share on Social Media

- Post on Facebook, Twitter, LinkedIn
- Share on educational forums
- Tell students and parents

### Step 3: Submit to Search Engines

- **Google**: [google.com/addurl](https://www.google.com/addurl)
- **Bing**: [webmaster.bing.com](https://www.bing.com/webmasters)
- **Yandex**: [yandex.com/webmaster](https://webmaster.yandex.com/)

---

## Testing Deployment

### Check SSL Certificate

```bash
# Should show green lock icon
https://yourdomain.com
```

### Test Features

- [ ] User registration works
- [ ] Login functionality
- [ ] Take a test with timer
- [ ] View scorecard
- [ ] Ask a doubt
- [ ] Admin panel accessible

### Monitor Performance

- Google Cloud Console
- Application error logs
- User feedback

---

## Troubleshooting

### Database Connection Issues

```bash
# Test MongoDB connection
mongosh "mongodb_connection_string"
```

### Port Already in Use

```bash
# Find process using port
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows
```

### Deployment Fails

1. Check logs:
   ```bash
   gcloud app logs read
   ```

2. Ensure all environment variables set

3. Verify Node.js version compatibility

4. Check for syntax errors:
   ```bash
   npm run dev
   ```

---

## Security Checklist

- [ ] Change JWT_SECRET to strong random string
- [ ] Enable HTTPS/SSL
- [ ] Set secure MongoDB password
- [ ] Limit API rate limiting
- [ ] Add input validation
- [ ] Hide sensitive data in .env
- [ ] Regular security updates
- [ ] Monitor suspicious activities

---

## Next Steps

1. **Customize** the website with your branding
2. **Add Tests** through admin panel
3. **Promote** your website
4. **Gather Feedback** from users
5. **Improve** based on feedback

---

## Support

For deployment issues:
- Check logs: `gcloud app logs read`
- Visit Google Cloud docs
- Contact platform support

---

**Your website is now live and accessible to the world! 🎉**

Good luck with Maa Kamkahakya Coaching Centre!
