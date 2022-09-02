/* globals describe it expect */

const Ship = require("../Ship");
const Port = require("../Port");
const Itinerary = require("../Itinerary");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    // let dover;
    // let calais;
    // let itinerary;
    // let ship;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "calais",
        ships: [],
      };
      itinerary = {
        ports: [dover, calais],
      };

      // itinerary = new Itinerary([dover, calais]);
      ship = new Ship("Alliance", itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a name", () => {
      expect(ship.name).toEqual("Alliance");
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(dover);
    });

    it("sets sail", () => {
      ship.setSail();

      expect(Ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });

    it("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
    it("can dock at a different port", () => {
      // const dover = new Port("Dover");
      // const calais = new Port("calais");
      // const itinerary = new Itinerary([dover, calais]);
      // const ship = new Ship("Alliance", itinerary);

      // console.log(ship);
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      console.log(calais);
      expect(calais.ships).toEqual([]);
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
      const ship = jest.fn();

      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship", () => {
      const port = new Port("Dover");
      const titanic = jest.fn();
      const queenMary = jest.fn();

      port.addShip(titanic);
      port.addShip(queenMary);

      port.removeShip(queenMary);
      console.log(port);

      expect(port.ships).toEqual([titanic]);
    });
  });
});
