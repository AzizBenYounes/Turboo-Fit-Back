const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(400).json({ errors: { msg: "No token" } });
    }

    // Accept both "Bearer <token>" and raw token
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    // ✅ Verify token (not decode)
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // ✅ Find user
    const foundUser = await User.findById(decoded.id);
    if (!foundUser) {
      return res.status(400).json({ errors: { msg: "User not found" } });
    }

    // ✅ Check admin
    if (!foundUser.isAdmin) {
      return res.status(403).json({ errors: { msg: "You Are Not Admin" } });
    }

    req.user = foundUser;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(400).json({ errors: { msg: "Impossible to verify!" } });
  }
};

module.exports = isAdmin;
