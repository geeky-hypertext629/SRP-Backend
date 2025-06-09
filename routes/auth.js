const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authenticateToken, authController.profile);
router.post('/logout', authController.logout);
router.get('/check-auth', authenticateToken, (req, res) => {
  res.json({ authenticated: true });
});

module.exports = router; 