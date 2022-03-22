require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
// static file public
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
