class Ship {
  constructor(name) {
    this.name = name;
    this.startingPort = 0;
  }
}

// If the ship doesnt have a name then it should return a falsy value.applythe ship .setsail function should push a name to the ship and then return a  truthy value. it needs to check if this is the case
// If a new ship hasnt been created using the constructor
//   ship .set sail should create a new ship and pass a starting port as a paramater

Ship.prototype.setSail = function (startingPort) {
  this.startingPort = startingPort;
};

module.exports = Ship;
