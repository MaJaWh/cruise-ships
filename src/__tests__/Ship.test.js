/* globals describe it expect */

const Ship = require("../Ship");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    const ship = new Ship("Alliance");
    expect(ship.name).toEqual("Alliance");
  });

  it("has a starting port", () => {
    const ship = new Ship("Alliance");
    expect(ship.startingPort).toEqual(0);
  });

  it("sets sail", () => {
    const ship = new Ship("Alliance");
    ship.setSail();
    expect(Ship.startingPort).toBeFalsy();
  });
});
