const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dulotet@gmail.com',
        pass: 'galeDo@03'
    }
});


let htmlMsg = `<p style="font-size: 16px;">Wiadomość testowa</p>
    <b>Witam Cię!</b>`

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const msg = req.query.msg;
        const sender = req.query.sender;
        const ip = req.query.ip;

        const htmlMsg = createHtmlMessage(msg, sender, ip);

        const mailOptions = {
            from: sender, // Something like: Jane Doe <janedoe@gmail.com>
            to: 'dersalis@outlook.com',
            subject: 'Wiadomość do IDO', // email subject
            text: 'To tylko test wiadomości', // Wiadomość w formacie text
            html: htmlMsg,
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send('Sended: ' + getFormatedDate());
        });
    });
});

function getFormatedDate() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return formatted_date;
}

function createHtmlMessage(message, sender, ip) {
    const currDate = new Date();
    const msg = '<span>Wiadomość do zgłaszającego </span>' + sender + ':</br></br><b>' + message + '</b></br></br><span> Wysłano: </span>' + getFormatedDate() + ' z IP: ' + ip + '</br>';
    return msg;
}

// const express = require('express');
// const app = express();

// app.get('/msg', async (req, res) => {
//     return res.send('Wiadomość wysłana');
// });