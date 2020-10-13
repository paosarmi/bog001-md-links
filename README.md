# Markdown Links

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Entregables](#6-entregables)
- [7. Hacker edition](#7-hacker-edition)
- [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
- [9. Checklist](#9-checklist)

---

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

## 2. Diagrama de flujo

![Diagrama de flujo](/img/diagrama-paola.png)

## 3. Instalación por paquete npm

```
npm install @paosarmi/md-links
```

## 4. Objetivos de aprendizaje

### JavaScript

- [ ] Uso de condicionales (if-else | switch | operador ternario)
- [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
- [ ] Manipular arrays (filter | map | sort | reduce)
- [ ] Manipular objects (key | value)
- [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression y statements.
- [ ] Diferenciar entre tipos de datos atómicos y estructurados.
- [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
- [ ] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

- [ ] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
- [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
- [ ] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
- [ ] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
- [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
- [ ] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

- [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
- [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
- [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
- [ ] Uso de Mocks manuales.
- [ ] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

- [ ] Organizar y dividir el código en módulos (Modularización)
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [ ] Uso de linter (ESLINT)

### Git y GitHub

- [ ] Uso de comandos de git (add | commit | pull | status | push)
- [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [ ] Colaboración en Github (branches | pull requests | |tags)
- [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

- [ ] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

- [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

---

## 5. Consideraciones generales

- Este proyecto se debe "resolver" de manera individual.

- La librería y script ejecutable (herramienta de línea de comando -
  CLI) debe estar implementada en JavaScript para ser ejecutada con
  Node.js. **Está permitido usar librerías externas**.

- Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

- Los tests unitarios deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

- Para este proyecto no está permitido utilizar `async/await`.

- Para este proyecto es opcional el uso de ES Modules `(import/export)`, en el
  caso optes utilizarlo deberás de crear un script de `build` en el `package.json`
  que los transforme en `requires` y `module.exports` con ayuda de babel.

## 6. Checklist

### General

- [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### CLI

- [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).
