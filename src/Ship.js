// const port = require("./Port");
// const itinerary = require("./Itinerary");

(function exportShip() {
  class Ship {
    //   constructor(name, itinerary) {
    // this.name = name;
    // this.currentPort = itinerary[0];
    // this.previousPort = null;
    // this.itinerary = itinerary;
    // this.currentIndex = 0;
    constructor(name, itinerary) {
      this.name = name;
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      this.currentPort.addShip(this);
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
      this.currentPort.removeShip(this);
    }

    dock() {
      // this.currentPort = this.itinerary.ports[1];
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

      this.currentPort = itinerary.ports[previousPortIndex + 1];

      this.currentPort.addShip(this);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
