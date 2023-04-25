const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://rapidapi.com/KegenGuyll/api/dad-jokes",
      {
        headers: {
          "X-RapidAPI-Key":
            "ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637",
          "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
        },
      }
    );

    const joke = response.data.body[0];
    res.json({ joke });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dad joke" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
