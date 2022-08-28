/* globals describe it expect */

const Ship = require("../Ship");
const Port = require("../Port");
const Itinerary = require("../Itinerary");

describe("Ship", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    // const calais = new Port("calais");
    const itinerary = new Itinerary([port]);
    const ship = new Ship("Alliance", itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  it("has a name", () => {
    const dover = new Port("Dover");
    const calais = new Port("calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship("Alliance", itinerary);
    expect(ship.name).toEqual("Alliance");
  });

  it("has a starting port", () => {
    const port = new Port("Dover");
    // const port = new Port("calais");
    const itinerary = new Itinerary([port]);
    const ship = new Ship("Alliance", itinerary);
    expect(ship.currentPort).toBe(port);
  });

  it("sets sail", () => {
    const dover = new Port("Dover");
    const calais = new Port("calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship("Alliance", itinerary);

    ship.setSail();

    expect(Ship.currentPort).toBeFalsy();
  });

  it("can dock at a different port", () => {
    const dover = new Port("Dover");
    const calais = new Port("calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship("Alliance", itinerary);

    console.log(ship);
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });

  it("cant't sail further than its itinerary", () => {
    const dover = new Port("Dover");
    const calais = new Port("calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship("Alliance", itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});
