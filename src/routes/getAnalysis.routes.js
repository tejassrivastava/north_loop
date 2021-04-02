const express = require("express");
let route = express.Router();
const getAnalysisController = require("../controller/getAnalysis.controller")
route.post("/get_analysis", getAnalysisController);
module.exports = route;
