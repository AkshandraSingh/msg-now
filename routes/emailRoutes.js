const express = require('express')
const path = require('path');

const emailController = require('../controllers/emailController')

const router = express.Router()

router.post('/sendMail', emailController.emailSender)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'views', 'mainPage.html'));
});

module.exports = router
