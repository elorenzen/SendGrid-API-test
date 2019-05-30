const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'eric.lorenzen@gmail.com',
    from: 'eric.lorenzen@gmail.com',
    subject: 'SendGrid API Test',
    text: 'This is a test using the SendGrid API.',
    html: '<p>This is a test using the <strong>SendGrid API</strong></p>'
};
sgMail.send(msg);