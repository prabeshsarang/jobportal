const { Job} = require('../models');
// Fetch all job listings and user's applications
const getJobListings = async (req, res) => {
    try {
      // The `req.userId` is set by the auth middleware
      const userId = req.userId;
  
      if (!userId) {
        return res.redirect('/login');
      }
  
      console.log("User ID: " + userId); // Debugging: Verify that the userId is correctly set
  
      // Fetch all available jobs with associated company information
      const jobs = await Job.findAll({
        attributes: ['id', 'jobTitle', 'jobDescription', 'location', 'jobType', 'salary', 'postingDate', 'expiryDate', 'companyId'],
        include: { model: Company, attributes: ['companyName'] },
      });
// Send the jobs to a view or as JSON
        res.render('jobListings', { jobs });
        // Or use: res.json({ jobs });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching job listings.');
    }
};

module.exports = { getJobListings };