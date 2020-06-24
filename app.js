const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("public"));

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring our routes

const apiroutes = require("./routes/api-routes");
const hroutes = require('./routes/html-routes');
app.use(hroutes);
app.use(apiroutes);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
