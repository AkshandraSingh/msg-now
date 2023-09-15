const path = require('path');

const emailService = require('../services/emailService')

module.exports = {
    emailSender: async (req, res) => {
        try {
            const { userEmail, toMail, mailSubject, messageMail } = req.body
            emailService.transporter.sendMail({
                from: userEmail,
                to: toMail,
                subject: mailSubject,
                text: messageMail
            })
            res.sendFile(path.join(__dirname, '..', 'views', 'thanksPage.html'));
        } catch (error) {
            res.status(500).send({
                success: false,
                error: error.message
            })
        }
    }
}
