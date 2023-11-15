const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

const postsUrl = process.env.POSTS_URL || "http://localhost:4000/events";
const commentsUrl = process.env.COMMENT_URL || "http://localhost:4001/events";
const queryUrl = process.env.QUERY_URL || "http://localhost:4002/events";
const moderation = process.env.MODERATION_URL || "http://localhost:4003/events";

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post(postsUrl, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(commentsUrl, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(queryUrl, event).catch((err) => {
    console.log(err.message);
  });
  axios.post(moderation, event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
