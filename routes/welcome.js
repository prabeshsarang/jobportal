// routes/jobseeker.js
const express = require('express');
const router = express.Router();
const jobseekerController = require('../controllers/jobseekerController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all job listings for job seekers
router.get('/jobseeker/dashboard', authMiddleware, jobseekerController.getJobListings);
module.exports = router;