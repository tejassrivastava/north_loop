const express = require("express");
let route = express.Router();
const getNewsController = require("../controller/getNews.controller");

route.post("/get_news", getNewsController);
module.exports = route;
