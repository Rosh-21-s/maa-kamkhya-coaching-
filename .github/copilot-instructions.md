<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Maa Kamkahakya Coaching Centre - Development Guidelines

## Project Overview

Mock test platform for JEE, NEET, and Government Job exams with Node.js backend and MongoDB database.

## Architecture

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Express.js (Node.js)
- **Database**: MongoDB
- **Authentication**: JWT-based
- **File Storage**: Multer (PDFs)

## Key Features

1. User registration and authentication
2. Mock tests with timer functionality
3. Automatic scoring with detailed analysis
4. Doubt asking and resolution system
5. Admin panel for test management
6. PDF upload for practice materials

## Development Conventions

### File Structure
- Models: `/models/` - Mongoose schemas
- Routes: `/routes/` - API endpoints
- Frontend: `/public/` - HTML, CSS, JS
- Server: `/server.js` - Express app

### Code Style
- Use ES6+ features
- Follow RESTful API conventions
- Validate all inputs
- Use async/await for async operations

### Database
- Collections: users, tests, results, doubts
- Use indexes for frequently queried fields
- Implement soft deletes where appropriate

### Security
- Hash passwords with bcryptjs
- Use JWT for authentication
- Validate file uploads
- Sanitize inputs
- Use environment variables for secrets

## Common Tasks

### Add New Test Category
1. Update `models/Test.js` enum
2. Update filter buttons in `public/index.html`
3. Add category handler in routes

### Create New API Endpoint
1. Create route in `/routes/`
2. Add mongoose schema in `/models/`
3. Implement error handling
4. Document in README

### Update Frontend Page
1. Edit HTML in `/public/`
2. Update CSS in `/public/css/style.css`
3. Add JavaScript in `/public/js/script.js`
4. Test in browser

## Dependencies

Core packages:
- express: Web framework
- mongoose: MongoDB ODM
- multer: File uploads
- bcryptjs: Password hashing
- jsonwebtoken: JWT auth
- dotenv: Environment config

Dev packages:
- nodemon: Auto-reload

## Running the Project

```bash
npm install              # Install dependencies
npm run dev             # Development with auto-reload
npm start               # Production mode
```

## Database Setup

Local:
```bash
mongod
```

Cloud (recommended):
- MongoDB Atlas: Create free cluster
- Update MONGODB_URI in .env

## Deployment

See DEPLOYMENT.md for:
- Google Cloud App Engine
- Railway.app
- Heroku
- Other platforms

## Testing Checklist

- [ ] User registration works
- [ ] Login/logout functionality
- [ ] Take test with timer
- [ ] Submit and get scorecard
- [ ] Ask and view doubts
- [ ] Admin test creation
- [ ] PDF upload and download
- [ ] Mobile responsiveness

## Known Limitations

- Current free tier limited to basic features
- File uploads stored locally (consider S3 for production)
- No advanced analytics yet
- Single admin account per instance

## Future Enhancements

1. Video tutorials section
2. Advanced analytics dashboard
3. Discussion forums
4. Payment integration
5. Mobile application
6. Live classes integration
7. AI-powered recommendations
8. Batch/group management

## Important Notes

- Always use .env for sensitive data
- Never commit API keys or passwords
- Test on localhost before deploying
- Backup MongoDB regularly
- Monitor error logs in production

## Useful Commands

```bash
npm install [package]      # Add dependency
npm uninstall [package]    # Remove dependency
npm run dev               # Start development server
node server.js            # Run production
gcloud app deploy         # Deploy to Google Cloud
```

## Documentation

- README.md - Full documentation
- DEPLOYMENT.md - Deployment guide
- QUICKSTART.md - Quick start guide

---

**Project Status**: Ready for development and deployment
**Last Updated**: May 7, 2026
