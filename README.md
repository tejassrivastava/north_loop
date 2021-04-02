# North Loop RapidAPI Integration

We have developed a system which integrates with RapidAPI and caches the response.

### 1. It consists of 2 endpoint, these API endpoints are accesible on localhost from 

a. **/get_analysis**

```
http://localhost:8080/get_analysis?symbol=AMRN&region=US
```

b. **/get_news**

```
http://localhost:8080/get_news?q=tesla&region=US
```

## Caching 

Caching is achieved using [apiCache](https://github.com/kwhitley/apicache).

Cache Duration Can be managed from .env file.

## Installation

Use the npm package manager to install the project dependencies

```b
npm install
```

## Usage

Run npm start to spin up the node server.
```
npm start
```




## License
[MIT](https://choosealicense.com/licenses/mit/)
