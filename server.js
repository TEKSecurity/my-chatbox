const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve the frontend files from /public
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing OPENAI_API_KEY env var" });
    }

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: messages.map((m) => ({
          role: m.role,
          content: [{ type: "input_text", text: m.content }],
        })),
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      return res.status(r.status).json({ error: errText });
    }

    const data = await r.json();
    const text = data.output_text || "";

    res.json({ reply: text });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Chatbox running at http://localhost:${PORT}`);
});
