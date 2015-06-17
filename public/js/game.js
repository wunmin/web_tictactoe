$(document).ready(function(){

  // setTimeOut to continuously ping DB for latest state of board and redraw board
  var latestBoardState = function(){
    var gameId = document.getElementById("game_id").getAttribute('value');

    $.ajax({
      method: "GET",
      url: "/games/" + gameId "/state",
    })
    .done(function(response){
      // Call another function to redraw board with information from "response"
    })
    ;
  };
  setTimeOut(latestBoardState, 1000);

});