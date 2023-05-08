const express = require("express");
const app = express();
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
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(
    `Vidyback App is listening at http://localhost:${port} With bitbuckket`
  );
});

