const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

var express = require('express');
var router = express.Router();


router.get('/gpt/', async (req, res, next) => {
  let userval = "";
  let response = "";
  res.render('gptForm', {userval,response});
});

router.post('/gpt', async (req, res, next) => {
  const userval = "Write a story about a superhero named " + req.body.supername + " who has the superpower of " + req.body.superpower + " and who has an archnemesis named " + req.body.archname + " whose favorite food is " + req.body.food;
  const val = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userval,
    temperature: 0,
    max_tokens: 1000,
  });
  let response = val.data.choices[0].text;
  res.render('gptForm', {userval,response});
});


module.exports = router;