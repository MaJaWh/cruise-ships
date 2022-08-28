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

    //   const newArray = this.ships.find((e) => e === ship);
    //   return this.ships.splice(newArray);
  }
}
module.exports = Port;
