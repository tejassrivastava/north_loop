const express = require("express");
const cacheWrapper = require("./cache/cache")

require("dotenv").config();



const app = express();

const get_analysis_route = require("./routes/getAnalysis.routes");
const get_news_route = require("./routes/getNews.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const cacheSuccesses = cacheWrapper();

app.post("/get_analysis", cacheSuccesses, get_analysis_route);
app.post("/get_news", cacheSuccesses, get_news_route);

// Listen on port 8080
var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
