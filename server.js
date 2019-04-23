var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.get("/api/fetch", function(req, res) {
    axios.get("https://www.reddit.com/").then(function(response) {
        var $ =  cheerio.load(html);
      
        })
    })
})


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
  

