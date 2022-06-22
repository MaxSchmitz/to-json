import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const response = await openai.createEdit({
    model: "code-davinci-edit-001",
    input: generatePrompt(req.body.animal),
    instruction: "JSON format",
    temperature: 0,
    top_p: 1,
  });

  res.status(200).json({ result: response.data.choices[0].text });
}

function generatePrompt(textInput) {
  return `${textInput}`;
}
