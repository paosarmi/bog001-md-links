const mdLinks = require("../src/index");

describe("readFilesAndLinks", () => {
  it("debería retornar status de link", () => {
    expect(
      mdLinks(
        "C:/Users/paosa/Documents/Proyectos Laboratoria/bog001-md-links/src/test.md"
      )
    ).toBe([404, 302, 200]);
  });
});
