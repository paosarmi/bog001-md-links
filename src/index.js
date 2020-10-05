module.exports = (path) => {
  var http = require("http");
  var https = require("https");
  const fs = require("fs");

  console.log(process.argv[0]);

  const statusLinks = [];

  function myFunc(arg) {
    console.log(`arg was = ${arg}`);
  }

  const data = fs.readFileSync(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  });

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
          statusLinks.push(statusCode);
          console.log(statusCode);

          setTimeout(myFunc, 1500, "funky");
        })
        .on("error", (e) => {
          statusLinks.push(404);
          console.log("404");
          setTimeout(5000);
        });
    }
  }

  console.log("links: " + statusLinks.length);
  return statusLinks;
};
