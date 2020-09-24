/* module.exports = () => {
  // ...
}; */

var http = require("http");
var https = require("https");
const fs = require("fs");

fs.readFile("test.md", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var dataSplit = data.split("\n");

  var linkRegex = /\(([^)]+)\)/;

  for (i = 0; i < dataSplit.length; i++) {
    if (dataSplit[i].match(linkRegex)) {
      console.log(dataSplit[i]);

      const linkMatch = dataSplit[i].match(linkRegex);
      console.log(linkMatch[1]);

      https
        .get(linkMatch[1], (res) => {
          const { statusCode } = res;
          console.log(statusCode);
        })
        .on("error", (e) => {
          console.log("404");
        });
    }
  }
});
