require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");
const API_KEY = process.env.API_KEY;
// static file public
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.set("view engine", "ejs");
const data = {
  adult: false,
  backdrop_path: "/t2yQllrX5scMUcTfUOPaJfcuu84.jpg",
  belongs_to_collection: null,
  budget: 0,
  genres: [{ id: 53, name: "Thriller" }],
  homepage: "",
  id: 915617,
  imdb_id: "tt15135004",
  original_language: "en",
  original_title: "Hacker: Trust No One",
  overview:
    "Danny was set to be rich with his new crypto currency until he was caught hacking finding himself and his girlfriend on a hit list.",
  popularity: 10.798,
  poster_path: "/91pB7MxquMeFbeMHamslCKk5wNZ.jpg",
  production_companies: [],
  production_countries: [],
  release_date: "2022-02-08",
  revenue: 0,
  runtime: 84,
  spoken_languages: [],
  status: "Released",
  tagline: "",
  title: "Hacker: Trust No One",
  video: false,
  vote_average: 0,
  vote_count: 0,
};
app.get("/", async (req, res) => {
  // let response = await axios.get(
  //   `https://api.themoviedb.org/3/movie/915617?api_key=${API_KEY}`
  // );
  // let data = response.data;
  // return res.send(data);
  res.render("index", { data });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
