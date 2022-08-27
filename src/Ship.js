const Port = require("./Port");
const Itinerary = require("./Itinerary");

class Ship {
  //   constructor(name, itinerary) {
  // this.name = name;
  // this.currentPort = itinerary[0];
  // this.previousPort = null;
  // this.itinerary = itinerary;
  // this.currentIndex = 0;
  constructor(name, itinerary) {
    this.name = name;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.itinerary = itinerary;
  }
  setSail() {
    // this.currentIndex = this.currentIndex++ % this.itinerary.length;
    // this.previousPort = this.currentPort;
    // this.currentPort = this.itinerary[this.currentIndex];
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.ports.length - 1) {
      throw new Error("End of itinerary reached");
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock() {
    // this.currentPort = this.itinerary.ports[1];
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
  }
}

module.exports = Ship;
