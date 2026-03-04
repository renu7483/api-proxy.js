export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
