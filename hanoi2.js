var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[3, 2, 1], [], []];
  };

  Game.prototype.promptPlayer = function() {
    this.fromTower(this.toTower)
  };

  Game.prototype.fromTower = function(callback) {
    var game = this;
    reader.question("Select tower to draw from: ", function(answer) {
      var towerFromIndex = parseInt(answer);

      if (game.towerExists(towerFromIndex) && !game.towerEmpty(towerFromIndex)) {
        var drawTower = game.towers[towerFromIndex - 1];
        callback(drawTower, game.moveDisk);
      }
    });
  };

  Game.prototype.toTower = function(drawTower, callback) {
    reader.question("Select tower to place disk: ", function(answer) {
      var towerToIndex = parseInt(answer);
      var moveTower = game.towers[towerToIndex - 1];

      if (game.towerExists(towerToIndex)) {
        if (moveTower.length === 0) {
          callback(drawTower, moveTower);
        } else if (moveTower[moveTower.length - 1] > drawTower[drawTower.length - 1]) {
          callback(drawTower, moveTower);
        }
      }
    });
  };

  Game.prototype.moveDisk = function(drawTower, moveTower) {
    var disk = drawTower.pop();
    moveTower.push(disk);
    if (game.towers[2].length < 3) {
      game.play();
    } else {
      console.log("YOU WIN!");
      return;
    }
  };

  Game.prototype.play = function() {
    this.render();
    this.promptPlayer();
  };

  Game.prototype.towerEmpty = function(towerIndex) {
    var game = this;
    if (game.towers[towerIndex - 1].length === 0) {
      return true;
    }
    return false;
  };

  Game.prototype.towerExists = function(towerIndex) {
    var validMoves = [0, 1, 2];
    for (var i = 0; i < validMoves.length; i++) {
      if (validMoves.indexOf(towerIndex - 1) === -1) {
        return false;
      }
    }
    return true;
  };

  Game.prototype.render = function() {
    console.log(this.towers);
  }

})(this);

var game = new this.Hanoi.Game();
game.play();