const apicache = require("apicache");
apicache.options({ debug: true });
const cacheWrapper = () => {

    let cache = apicache.middleware;
    const onlyStatus200 = (req, res) => {
          
      return res.statusCode === 200 ? true : false;
    };
    
    const cacheSuccesses = cache(process.env.CACHE_DURATION, onlyStatus200);
    return cacheSuccesses;
}

module.exports = cacheWrapper;