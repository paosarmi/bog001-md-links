/*module.exports = () => {
  // ...
};*/

const fs = require("fs");

//Leer archivo.md

fs.readFile("TEXT.md", { encoding: "utf8" }, function (error, data) {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Datos leidos: ", data);
  }
});
