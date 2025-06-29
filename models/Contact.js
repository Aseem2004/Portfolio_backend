const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  message: String,
});

module.exports = mongoose.model("Contact", contactSchema);
