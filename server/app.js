require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routes/Router")

const port = process.env.PORT;
const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solving CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// DB connection
require("./config/db");

// Using all routes
app.use(router)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

