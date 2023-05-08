const jsonServer = require('json-server')
const clone = require('clone')
const data = require('./db.json')

const isProductionEnv = process.env.NODE_ENV === 'production';
const server = jsonServer.create()

// For mocking the POST request, POST request won't make any changes to the DB in production environment
const router = jsonServer.router(isProductionEnv ? clone(data) : 'db.json', {
    _isFake: isProductionEnv
})
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
    if (req.path !== '/')
        router.db.setState(clone(data))
    next()
})
const { food, auto, estate, travel, autoQuote, autoEvent, autoTips, autoBlogs, sports, jobs, politics, estateTips, estateQuote } = require("./dummydata");

app.use("/dummy/server/:platform", async function (req, res) {
  try {
    console.log(req.params.platform);
    let collection;
    if (req.params.platform == "food") {
      collection = food;
    } else if (req.params.platform == "auto") {
      collection = auto;
    } else if (req.params.platform == "travel") {
      collection = travel;
    } else if (req.params.platform == "autoQuote") {
      collection = autoQuote;
    } else if (req.params.platform == "autoEvent") {
      collection = autoEvent;
    } else if (req.params.platform == "autoTips") {
      collection = autoTips;
    } else if (req.params.platform == "autoBlogs") {
      collection = autoBlogs;
    } else if (req.params.platform == "sports") {
      collection = sports;
    } else if (req.params.platform == "jobs") {
      collection = jobs;
    } else if (req.params.platform == "politics") {
      collection = politics;
    } else if (req.params.platform == "estateTips") {
      collection = estateTips;
    } else if (req.params.platform == "estateQuote") {
      collection = estateQuote;
    } else {
      collection = estate;
    }
    res.status(200).json(collection);
  } catch (error) {
    console.log(error);
  }

}
);
server.use(router)
server.listen(process.env.PORT || 8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server