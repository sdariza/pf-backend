const express = require('express');

const router = express.Router();

const {
  getUserById, createUser, updateUser, deactivateUser, loginUser,
} = require('../controllers/users');

// const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deactivateUser);

router.post('/login', loginUser);

module.exports = router;
