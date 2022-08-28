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
}
module.exports = Port;
