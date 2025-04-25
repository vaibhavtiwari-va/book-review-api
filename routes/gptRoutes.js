const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/refine-review', async (req, res) => {
  const { originalReview } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'Refine this book review to improve grammar, clarity, and tone.' },
        { role: 'user', content: originalReview }
      ],
      temperature: 0.7,
    });

    const refinedReview = completion.choices[0].message.content;
    res.json({ original: originalReview, refined: refinedReview });
  } catch (err) {
    res.status(500).json({ error: 'Failed to refine review', details: err.message });
  }
});

module.exports = router;
