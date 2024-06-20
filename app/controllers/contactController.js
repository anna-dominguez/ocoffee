const emailjs = require("@emailjs/nodejs");

const contactController = {
  sendEmail: async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.redirect("/contact");
    }
    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          firstName,
          lastName,
          to_name: "Anna",
          message,
          from_name: `${firstName} ${lastName} with email ${email}`,
        },
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
          privateKey: process.env.EMAILJS_PRIVATE_KEY, // optional, highly recommended for security reasons
        }
      );
      console.log("SUCCESS!");
    } catch (err) {
      if (err instanceof emailjs.EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }

      console.log("ERROR", err);
    }
    res.redirect("/contact");
  },
};

module.exports = contactController;
