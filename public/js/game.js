$(document).ready(function(){

  // setTimeOut to continuously ping DB for latest state of board and redraw board
  var latestBoardState = function(){
    $.ajax(
      url: "");
  };
  setTimeOut(latestBoardState, 1000);

});