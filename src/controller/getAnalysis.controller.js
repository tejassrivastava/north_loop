const axios = require("axios").default;
const getAnalysisController = async (req,res,next) => {
    const options = {
        method: "GET",
        url: process.env.GET_ANALYSIS_URL,
        params: { ...req.query },
        headers: {
          "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
        },
      };
      try {
        let response = await axios(options);
    
        if (response.status === 200) {
          return res.status(200).json({ ...response.data });
        }
      } catch (err) {
        console.log("error :", err);
        return res.status(500).json("Internal Server error " + err.message);
      }
}

module.exports = getAnalysisController;