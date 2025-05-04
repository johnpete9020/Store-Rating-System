// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { authenticate, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/dashboard', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;
