const express = require ('express');
const { getAllUsers } = require('../controllers/users.controller');
const isAdmin = require('../middlewares/isAdmin.js');
const router = express.Router();

//router for getAll
router.get('/all', isAdmin , getAllUsers)

module.exports = router;