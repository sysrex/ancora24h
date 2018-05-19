const nodemailer = require('nodemailer')
require('dotenv').config({ path: '.env' })

exports.contact = async (req, res) => {
  res.render('contact');
};

exports.sendEmail = (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  
    const transport = nodemailer.createTransport({
        service: 'Mandrill',
        auth: {
        user: '',
        pass: ''
        }
    })


	const mailOptions = {
		from: `Website <no-reply@ancora24h.at>`,
		to: `office@ancora24h.at`,
		subject: `Contact Form Website`,
		html: 'Name:' + ' ' + name + ' ' + '<br>'
		+ 'Phone:' + ' ' + phone + ' ' + '<br>'
		+ 'Email:' + ' ' + email + ' ' + '<br>'
		+ 'Message:' + ' ' + message + '<br>'
	}

	transport.sendMail(mailOptions, (err, info) => {
		if (err) 
			throw new Error(err)
		else
			console.log(info)
			console.log(mailOptions)
	})
    res.redirect('/');
}