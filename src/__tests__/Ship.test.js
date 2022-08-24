/* globals describe it expect */

const Ship = require("../Ship");
const Port = require("../Port");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    const ship = new Ship("Alliance");
    expect(ship.name).toEqual("Alliance");
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });

  it("sets sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(Ship.currentPort).toBeFalsy();
  });
});
