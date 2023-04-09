const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users')

// CREATE - POST
router.get('/', UserController.getAllUsers)

// READ - GET
router.post('/', UserController.createNewUsers)

// UPDATE - PATCH
router.patch('/:id', UserController.updateUser)

// DELETE
router.delete('/:id', UserController.deleteUser)

module.exports = router