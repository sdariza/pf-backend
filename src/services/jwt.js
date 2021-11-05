const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

/**
 *
 * @param {Number} id Userid
 * @returns {String}
 */
function generateAccessToken(id) {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d' });
}

/**
 *
 * @param {String} token
 * @returns {{ id: Number }}
 */
function verifyAccessToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
};
