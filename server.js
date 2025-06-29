const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const mongoURI =
  "mongodb+srv://jainaseem2004:Aseem1234@portfolio.bqswkip.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=Portfolio";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const Contact = require("./models/Contact");

app.post("/api/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(200).json();
  } catch (error) {
    res.status(500).json();
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
