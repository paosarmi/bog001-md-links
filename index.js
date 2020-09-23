//const { rejects } = require("assert");
const fs = require("fs");
//const { resolve } = require("path");
const md = require("markdown-it")({
  html: true,
  linkify: true,
});

//Leer archivo.md

fs.readFile("TEXT.md", { encoding: "utf8" }, readFiles);
function readFiles(error, data) {
  if (error) {
    console.log("Error: ", error);
  } else {
    //console.log("Datos leidos: ", data);
    let result = md.renderInline(data);
    console.log(result);
  }
}

//Extraer links de archivos.md
