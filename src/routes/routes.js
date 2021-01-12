const {Router} = require('express')
const sgMail = require('@sendgrid/mail')


const router = Router();


router.post('/', async (req, res) => {
    const {name, email, message} = req.body;

    contentHTML = `
        <h2>Nuevo Mensaje</h2>
        <ul> 
            <li>User Name: ${name}</li>
            <li>User Email: ${email}</li>
            <h3>Mensaje: ${message}</h3>
        </ul>
    `
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'Sprova-Dev <sprova03@gmail.com>', // Change to your recipient
  from: process.env.SENDGRID_FROM, // Change to your verified sender
  subject: 'Formulario de contacto',
  text: 'Alguien se quiere contactar contigo',
  html: contentHTML,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

    res.status(200).redirect('/')
})

module.exports = router