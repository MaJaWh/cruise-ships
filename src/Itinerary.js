// const port = require("./Port");

(function exportPort() {
  class Itinerary {
    constructor(ports) {
      this.ports = ports;
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Itinerary;
  } else {
    window.Itinerary = Itinerary;
  }
})();
