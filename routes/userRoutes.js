const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getUserProfile, updateUserProfile } = require('../controllers/userControllers');


// GET /users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-__v');
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', getUserProfile);

// Update user profile by ID
router.put('/:id', updateUserProfile);

// PUT /users/:id
router.put('/:id', async (req, res) => {
  try {
    const { username, bio, avatar } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, bio, avatar },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
