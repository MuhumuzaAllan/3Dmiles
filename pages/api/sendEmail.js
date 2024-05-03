import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mileslegend7@gmail.com',
      pass: 'JESUS@20',
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'mileslegend7@gmail.com',
    subject: `New Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
};