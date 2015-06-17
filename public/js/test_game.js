$(document).ready(function() {

  function Game(){
    var states = ["", "", "", "", "", "", "", "", ""]
    var boxNum = {
                  00: 0,
                  10: 1,
                  20: 2,
                  01: 3,
                  11: 4,
                  21: 5,
                  02: 6,
                  12: 7,
                  22: 8
                  };

    this.switchTurns = function(){
      if (playerCount % 2 === 0){
        var turn = "It's player 1's turn."
      }
      else {
        var turn = "It's player 2's turn."
      }
      playerCount ++;
      document.getElementById("turn").innerHTML = turn;
      }
    }

    this.boardClickable = function(){
      // var turn = document.getElementById("turn").getAttribute('value');
      if (playerNum != (playerCount % 2)) {
        $("#board").unbind("click");
      }
      else {
        $("#board").bind("click");
      }
    }

    this.boardFull = function(){
      var full = true
      for (var i = 0; i < states.length; i++) {
        if (states[i] === "") {
            full = false;
        }
      }
      full
    }

    this.hasWon = function(){
      var winningCombination = [[0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6]]

      // Loop through "states" and check if any of the comibnation above produces the same symbol
      for (var i = 0; i < winningCombination.length; i ++) {
          if ((states[i[0]] === states[i[1]]) && (states[i[1]] === states[i[2]])){
            return true
          }
      }
    }

    // this.hasEnded = function(){
    //   // Check for one player has won or the board is already full
    //   if (this.boardFull() || this.hasWon()){
    //     $.ajax(){
    //       // Send winner (or no winner) info to backend
    //     }
    //   }
    // }

  $(".square").click(function(event){
    var playerNum = document.getElementById("player").getAttribute('value');
    var identifier = $(this).attr("id");

    if (playerNum === "0"){
      $("#" + identifier).append("<div id=\"circle\"></div>");
    }
    else {
      $("#" + identifier).append("<div id=\"cross\">X</div>");
    }




  // $("#board").click(function(event){
  //   event.preventDefault();
  //   var x = event.clientX;
  //   var y = event.clientY;
  //   // var x = Math.floor((event.clientX - 200)/100);
  //   // var y = Math.floor((event.clientY - 100)/100);
  //   var coor = "X coords: " + x + ", Y coords: " + y;
  //   document.getElementById("demo").innerHTML = coor;
  //   var box = new Box();

  //   var playerNum = document.getElementById("player").getAttribute('value');
  //   if (playerNum === "1"){
  //     box.drawO(x,y);
  //     game.hasEnded
  //   }
  //   else {
  //     box.drawX(x,y);
  //   }
  //   game.switchTurns();
  // });

  // var game = new Game();
  // var playerCount = 0;
  // var playerNum = document.getElementById("player").getAttribute('value');
  // // game.boardClickable();
  // DrawBoard();


  });
});
