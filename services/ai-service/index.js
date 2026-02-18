import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

app.post("/classify", async (req, res) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: `Classify ticket: ${req.body.text}` }
    ]
  });

  res.json({ result: response.choices[0].message.content });
});

app.listen(5001);
