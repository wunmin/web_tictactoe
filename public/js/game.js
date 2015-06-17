$(document).ready(function(){

  // setTimeOut to continuously ping DB for latest state of board and redraw board
  var latestBoardState = function(){
    var gameId = document.getElementById("game_id").getAttribute('value');

    $.ajax({
      method: "GET",
      url: "/games/" + gameId + "/state",
    })
    .done(function(response){
      // Call another function to redraw board with information from "response"
    })
    ;
  };
  setTimeOut(latestBoardState, 1000);

  $(".square").click(function(event){
    var playerNum = document.getElementById("player").getAttribute('value');
    var gameId = document.getElementById("game_id").getAttribute('value');
    var squareId = $(this).attr("id");

    if (playerNum === "1"){
      $("#" + squareId).append("<div id=\"circle\"></div>");
      $("#" + squareId).unbind("click");
    }
    else {
      $("#" + squareId).append("<div id=\"cross\">x</div>");
      $("#" + squareId).unbind("click");
    }

    $.ajax({
      method: "POST",
      url: "/games/" + gameId + "/move",
      data: {square: squareId}
    })
    .done(function(response){
      if (response["has_ended"] === true){

      }
      else {

      }
    });


});