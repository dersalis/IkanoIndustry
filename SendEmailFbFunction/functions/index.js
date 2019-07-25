const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dulotet@gmail.com',
        pass: 'galeDo@03'
    }
});

// $mail->isSMTP();                                      
// $mail->Host = 'serwer1351051.home.pl';  
// $mail->SMTPAuth = true;                               
// $mail->Username = 'www@serwer1351051.home.pl';                 
// $mail->Password = '&UQsJYsx+5tN';                           
// $mail->SMTPSecure = 'ssl';                            
// $mail->Port = 465;   

// $mail->setFrom('www@serwer1351051.home.pl', 'WWW IkanoIndustry');
// $mail->addAddress('iod@ikanoindustry.pl', 'Rekrutacja');     
// $mail->CharSet = 'UTF-8';


// https://us-central1-ikanoindustyweb.cloudfunctions.net/sendMail?msg=Witaj świecie&sender=dersalis@outlook.com&ip=192.168.0.101
exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const msg = req.query.msg;
        const sender = req.query.sender;
        const ip = req.query.ip;

        const htmlMsg = createHtmlMessage(msg, sender, ip);

        const mailOptions = {
            from: '"WWW Ikano Industry" <www@serwer1351051.home.pl>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'dersalis@outlook.com',
            subject: 'Wiadomość do IOD', // email subject
            //text: 'To tylko test wiadomości', // Wiadomość w formacie text
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

// Zwraca sformatowaną datę
function getFormatedDate() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    return formatted_date;
}

// Zwraca sformatowaną treść wiadomości
function createHtmlMessage(message, sender, ip) {
    const currDate = new Date();
    const msg = '<span>Wiadomość do zgłaszającego </span>' + sender + ':</br></br><b>' + message + '</b></br></br><span> Wysłano: </span>' + getFormatedDate() + ' z IP: ' + ip + '</br>';
    return msg;
}