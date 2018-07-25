var express = require("express");
var emojiList = require("../assets/emojiList.json");
var app = express();

// Our first route
app.get("/", function(req, res) {
    var data = filterEmoji("Wave",10);
    res.send("Hello Dev!"+ data);

    console.log(filterEmoji("Wave",10))

});

// Listen to port 5000
app.listen(3000, function() {
  console.log("Dev app listening on port 3000!");
});

var filterEmoji = function (searchText, maxResults) {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
