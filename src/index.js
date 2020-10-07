const fs = require("fs");
const chalk = require("chalk");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/*leer de manera sincrona el archivo (path) y retornar el contenido como una cadena de caracteres (string) */
const readFile = (path) => {
  const data = fs.readFileSync(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  return data;
};

/*lee la data (string), los separa por salto de linea (\n) y valida con una expresión regular si contiene
o no una URL, si lo tiene crea un objeto {url, status} por cada uno y lo guarda en un arreglo (links) */
const getLinks = (data, path) => {
  const links = [];
  var dataSplit = data.split("\n");
  var linkRegex = /\(([^)]+)\)/;
  for (i = 0; i < dataSplit.length; i++) {
    if (dataSplit[i].match(linkRegex)) {
      const linkMatch = dataSplit[i].match(linkRegex);
      links.push({
        url: linkMatch[1],
        status: 0,
        statusDescription: "",
        path: path,
      });
    }
  }
  return links;
};

/*envia una petición de la pagina (link) y guarda el resultado de la conexión (req.status) */
const checkLink = (link) => {
  let req = new XMLHttpRequest();
  req.open("GET", link.url, false);
  req.send(null);
  link.status = req.status == 0 ? 404 : req.status;
  link.statusDescription = link.status == 404 ? "fail" : "ok";
};

/* procesa un archivo, extrae la data, luego los link y los valida uno a uno*/
const processFile = (path) => {
  const data = readFile(path);
  const links = getLinks(data, path);
  links.forEach((link) => {
    checkLink(link);
  });
  return links;
};

const mdLinks = (path, options) => {
  processFile(path).map((link) => {
    console.log(
      link.path +
        " " +
        link.url +
        " " +
        link.statusDescription +
        " " +
        link.status
    );
  });
};

module.exports = mdLinks;
