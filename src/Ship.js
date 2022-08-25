const Port = require("./Port");

class Ship {
  constructor(name) {
    this.name = name;
    this.currentPort = this.name;
  }
  setSail() {
    this.currentPort = null;
  }

  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
