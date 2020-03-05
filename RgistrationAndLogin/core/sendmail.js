const express = require('express'),
      app = express(),
      nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser');
      port = process.env.PORT || 4000;
 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.render('index');
});

app.post('/send-email', (req, res) => {
   let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
           user: 'tnothemba@gmail.com',
           pass: '0730073642'
      }
   });

   let mailOptions = {
      from: '"Nothemba Tsheme" <tnothemba@gmail.com>',
      to: req.body.to,
      html: '<p>Click <a= href="localhost:3000/registrationForm.html">here</a> to register</p>' 
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log("Message send Successfully");
     
   });
 });
