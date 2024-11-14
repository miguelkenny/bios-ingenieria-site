import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import validator from 'validator';

dotenv.config();

const app = express();
const port = 3000;

const corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? process.env.CORS_ORIGIN_PROD : process.env.CORS_ORIGIN_LOCAL,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    console.log('SEND EMAIL');

    const { firstName, lastName, email, message } = req.body;

    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).send('Invalid email address');
    }

    // Sanitizar el mensaje y los campos de nombre para evitar scripts
    const sanitizedFirstName = validator.escape(firstName);
    const sanitizedLastName = validator.escape(lastName);
    const sanitizedMessage = validator.escape(message);

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'Nuevo Mensaje desde biosing.com.ar',
        text: `Nombre: ${sanitizedFirstName} ${sanitizedLastName}\nEmail: ${email}\nMensaje: ${sanitizedMessage}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Message sent');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});