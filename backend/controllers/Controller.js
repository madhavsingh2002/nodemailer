import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport'
const transport = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        }
    })
)
const EmailController = (req, res) => {
    try {
      const { name, email, msg } = req.body;
  
      //validation
      if (!name || !email || !msg) {
        return res.status(500).send({
          success: false,
          message: "Please Provide All Fields",
        });
      }
      //email matter
      transporter.sendMail({
        to: "maddyauto0618@gmail.com",
        from: "madhav201singh@gmail.com",
        subject: "Send email using nodemailer",
        html: `
          <h5>Detail Information</h5>
          <ul>
            <li><p>Name : ${name}</p></li>
            <li><p>Email : ${email}</p></li>
            <li><p>Message : ${msg}</p></li>
          </ul>
        `,
      });
  
      return res.status(200).send({
        success: true,
        message: "Your Message Send Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Send Email API Error",
        error,
      });
    }
  };
  export default EmailController;