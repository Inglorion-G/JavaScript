var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[1,2,3], [], []];
  };

  Game.prototype.promptPlayer = function() {
    Game.fromTower(validDrawCallback);
    Game.toTower(validPlacementCallback);
  };

  Game.prototype.fromTower = function(callback) {
    reader.question("Select tower to draw from: ", function(answer) {
      var towerFrom = parseInt(answer);
      if (callback(towerFrom)) {
        return towerFrom;
      }
    });
  };

  Game.prototype.toTower = function(callback) {
    reader.question("Select tower to place disk: ", function(answer) {
      var towerTo = parseInt(answer);
      if (callback(towerTo)) {
        return towerTo;
      }
    });
  };

  Game.prototype.towerExists = function(towerIndex) {
    var validMoves = [1, 2, 3];

    for (var i = 0; i < validMoves.length; i++) {
      if (validMoves.indexOf(towerIndex) === -1) {
        return false;
      }
    }
    return true;
  }

  Game.prototype.validDraw = function(towerIndex) {
    if (!towerExists()) {
      return false;
    }

    if (this.towers[towerIndex - 1].length === 0) {
      throw new Error("Can't draw from empty tower! Bitch!");
    }
    return true;
  };

  Game.prototype.validMove = function(towerIndex, disk) {
    if (!towerExists()) {
      return false;
    }

    var testTower = this.towers[towerIndex - 1];

    if (testTower[testTower.length - 1] < disk) {
      return false;
    }
    return true;
  };

  Game.prototype.moveDisk = function() {

  };


})(this);

var game = new this.Hanoi.Game();
game.printTower();