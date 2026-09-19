const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;

    res.json(data.products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port 8080"); 
});