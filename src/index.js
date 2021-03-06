const fs = require("fs");
const chalk = require("chalk");
const { promises } = require("fs");
const { rejects } = require("assert");
const { resolve } = require("path");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const pathLib = require("path");
const { link } = require("fs");

/*validar si el path es un directorio */
const checkIfDirectory = (path) => {
  return fs.lstatSync(path).isDirectory();
};

/*lee el directorio, obtiene los archivos y lee cada archivo */
const readDirectory = (path) => {
  const dataArray = [];
  const files = fs.readdirSync(path);
  files.forEach(function (file) {
    dataArray.push({ data: readFile(pathLib.join(path, file)), file: file });
  });
  return dataArray;
};

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
o no una URL, si lo tiene crea un objeto {href, status, ok, file, text} por cada uno y lo guarda en un arreglo (links) */
const getLinks = (data, path) => {
  const links = [];
  var dataSplit = data.split("\n");
  var linkRegex = /\(([^)]+)\)/;
  for (i = 0; i < dataSplit.length; i++) {
    if (dataSplit[i].match(linkRegex)) {
      const linkMatch = dataSplit[i].match(linkRegex);
      links.push({
        href: linkMatch[1],
        status: 0,
        ok: "",
        file: path,
        text: dataSplit[i].split(linkMatch[0])[1],
      });
    }
  }
  return links;
};

/*envia una petición de la pagina (link) y guarda el resultado de la conexión (req.status) */
const checkLink = (link) => {
  let req = new XMLHttpRequest();
  req.open("GET", link.href, false);
  req.send(null);
  link.status = req.status == 0 ? 404 : req.status;
  link.ok = link.status == 404 ? "fail" : "ok";
};

/* procesa un archivo, extrae la data, luego los link*/
const processPath = (path) => {
  let links = [];
  if (checkIfDirectory(path)) {
    const dataArray = readDirectory(path);
    for (let i = 0; i < dataArray.length; i++) {
      links = links.concat(
        getLinks(dataArray[i].data, pathLib.join(path, dataArray[i].file))
      );
    }
  } else {
    const data = readFile(path);
    links = getLinks(data, path);
  }
  return links;
};

/*obtiene los links del path y valida que esten activos */
const onlyValidate = (path) => {
  let links = processPath(path);
  links.forEach((link) => {
    checkLink(link);
  });
  return links;
};

/*obtiene los links y dice cuantos hay y cuales son unicos */
const onlyStats = (path) => {
  let links = processPath(path);
  let setLinks = new Set();
  for (let i = 0; i < links.length; i++) {
    if (!setLinks.has(links[i].href)) {
      setLinks.add(links[i].href);
    }
  }
  return { Total: links.length, Unique: setLinks.size };
};

/*obtiene los links, valida que esten activos y muestra cuantos hay, cuales son unicos
y cuales estan dañados */
const validateAdnStats = (path) => {
  let links = processPath(path);
  links.forEach((link) => {
    checkLink(link);
  });
  let setLinks = new Set();
  let uniqueLinks = [];
  for (let i = 0; i < links.length; i++) {
    if (!setLinks.has(links[i].href)) {
      setLinks.add(links[i].href);
      uniqueLinks.push(links[i]);
    }
  }
  let broken = 0;
  for (let i = 0; i < uniqueLinks.length; i++) {
    if (uniqueLinks[i].status == 404) {
      broken++;
    }
  }
  return { Total: links.length, Unique: setLinks.size, Broken: broken };
};

/*retorna la lista de los links */
const noOptions = (path) => {
  let links = processPath(path);
  return links;
};

/*retorna el resulta segun las opciones y lo guarda en una promesa */
const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    let result = [];
    if (options.validate && !options.stats) {
      result = onlyValidate(path);
    } else if (options.stats && !options.validate) {
      result = onlyStats(path);
    } else if (options.validate && options.stats) {
      result = validateAdnStats(path);
    } else {
      result = noOptions(path);
    }
    resolve(result);
  });
};

module.exports = mdLinks;
