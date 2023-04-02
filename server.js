//require("dotenv").config();
const passwords = require("./config.json");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const fs = require("fs");

//server used to send emails and make API calls
const port = 5100;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server Running on port ${port}`));

// Process.env doesnt seem to be working for these variables
//const emailUser = process.env.EMAIL_USER;
//const emailPass = process.env.EMAIL_PASS;
//console.log(process.env.EMAIL_USER);
//console.log(process.env.EMAIL_PASS);

const emailUser = passwords.EMAIL_USER;
const emailPass = passwords.EMAIL_PASS;
//console.log(passwords.EMAIL_USER);
//console.log(passwords.EMAIL_PASS);
//console.log(emailUser);
//console.log(emailPass);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//===========//===========//===========//===========//===========//===========

//                          ChatGPT API endpoint

//===========//===========//===========//===========//===========//===========

const { Configuration, OpenAIApi } = require("openai");
const openAiApiKey = passwords.OPENAI_API_KEY;
// Content coming from config.json file
//const gptPrompt = passwords.GPT_PROMPT;
//console.log(gptPrompt);

// using require fs read the text file in the root folder
const buffer = fs.readFileSync("prompt.txt");
// use the toString() method to convert Buffer into String
const promptContext = buffer.toString();
// Console logging information from the text file in the terminal to see if it is reading the text file accurately
//console.log(promptContext);

const config = new Configuration({
  apiKey: openAiApiKey,
});

const openai = new OpenAIApi(config);

app.post("/chatgpt", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createChatCompletion({
    //model: "text-davinci-003",
    model: "gpt-3.5-turbo",
    max_tokens: 150,
    temperature: 0.7,
    messages: [{ role: "user", content: promptContext + prompt }],
    //prompt: promptContext + prompt,
  });
  res.send(completion.data.choices[0].message.content);
  //res.send(completion.data.choices[0].text);
});

// router.post("/chatgpt", async (req, res) => {
//   const question = req.body.question;

//   // Your ChatGPT API code goes here
//   const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
//   const prompt = `The following is a conversation with an AI assistant about ${question}. The AI assistant is helpful, creative, clever, and very friendly. \n\nHuman: ${question}\nAI:`;

//   try {
//     const response = await axios({
//       method: "POST",
//       url: apiUrl,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       data: {
//         prompt,
//         max_tokens: 150,
//         temperature: 0.7,
//       },
//     });

//     const answer = response.data.choices[0].text.trim();
//     res.json({ answer });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error generating response");
//   }
// });
//===========//===========//===========//===========//===========//===========

//                        Contact form endpoint

//===========//===========//===========//===========//===========//===========

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "hollyjohanna.robbins@gmail.com",
    subject: "Contact Form Submission - Holliday Robbins",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
