const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

async function classifyTicket(content) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Classify ticket into categories: Billing, Technical, Abuse, Other and assign priority Low/Medium/High." },
      { role: "user", content }
    ]
  });

  return response.choices[0].message.content;
}

async function moderateContent(content) {
  const response = await openai.moderations.create({
    model: "omni-moderation-latest",
    input: content
  });

  return response.results[0];
}

module.exports = { classifyTicket, moderateContent };
