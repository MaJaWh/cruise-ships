const Port = require("../Port");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(Port).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    const port = new Port("Dover");
    expect(port.name).toEqual("Dover");
  });
});
