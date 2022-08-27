const Itinerary = require("../Itinerary");
const Port = require("../Port");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("has a port", () => {
    const itinerary = new Itinerary("Bristol");
    expect(itinerary.ports).toEqual("Bristol");
  });

  it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("calais");

    const itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
