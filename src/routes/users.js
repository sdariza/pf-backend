const express = require('express');

const router = express.Router();

const {
  getUserById, createUser, updateUser, deactivateUser, loginUser, getAllUsers,
} = require('../controllers/users');

const { authMiddleware } = require('../middlewares/authMiddleware');
const { paginationMiddleware } = require('../middlewares/paginationMiddleware');

router.get('/all', authMiddleware, paginationMiddleware, getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.put('/:id', authMiddleware, updateUser);

router.delete('/:id', authMiddleware, deactivateUser);

router.post('/login', loginUser);

module.exports = router;
