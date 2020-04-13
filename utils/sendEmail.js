const nodemailer = require('nodemailer');

module.exports = {
    async sendEmail(email, message)  {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '456square123@gmail.com',
                pass: 'vinnitsa123',
            }
        });

        let result = await transporter.sendMail({
            from: '"Node js" <nodejs@example.com>',
            to: email,
            subject: "Magisoft 'Test'",
            text: message,
            html: `<strong>${message}</strong>`
        });

        console.log(result);
    }
};
