(function exportPort() {
  class Port {
    constructor(name) {
      this.name = name;
      this.ships = [];
      // this.currentShip = currentShip;
    }

    addShip(ship) {
      this.ships.push(ship);
      // this.ships = [ship];
    }

    removeShip(ship) {
      const ships = this.ships;
      const indexInArray = ships.findIndex((e) => e === ship);
      return this.ships.splice(indexInArray, 1);
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();
// module.exports = Port;
