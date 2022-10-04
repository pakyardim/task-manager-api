const nodemailer = require('nodemailer');

const transporter = () => {
    return nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'myhotmail@hotmail.com',  // Your email address
            pass: "mypassword"  // Your password (or special app password)
        }
    })
}
 
const sendWelcomeEmail = (email, name) => {
    const transporterObject = transporter();
     transporterObject.sendMail({
        from: 'myhotmail@hotmail.com',
        to: email,
        subject: 'Hello this is Me!',
        text: `I'm your one and only, Emirhan!!!! And this is an automated message coded by me ${name}!`,
    })
}
 
const sendDeleteEmail = (email, name) => {
    const transporterObject = transporter()
     transporterObject.sendMail({
        from: 'myhotmail@hotmail.com',
        to: email,
        subject: 'Bye bye luv bye bye happiness hello loneliness',
        text: `OK i'm deleting you now, ${name}!`
    })
}
 
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
};