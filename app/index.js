require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 2345;
const cors = require("cors");
const morgan = require("morgan");
const { Comment } = require("./models");
const db = require("./models").sequelize;
// static file public
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const comments = await Comment.findAll();
  res.render("index", { comments });
});

app.post("/comment", async (req, res) => {
  const { fullName, text } = req.body;
  console.log(fullName, text);
  if (fullName && text) {
    const newComment = await Comment.create({ fullName, text });
    return res.json(newComment);
  } else {
    return res.status(400).json({
      message: "Please enter full name and text",
    });
  }
});
app.get("/comment", async (req, res) => {
  const comments = await Comment.findAll();
  return res.json(comments);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
