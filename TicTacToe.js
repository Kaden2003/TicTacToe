function startGame() {
  document.turn = "X";
}


function NextMove(Square) {
  Square.innerText = document.turn;
  switch();
}


function switch(){
  if (document.turn == "X"){
    document.turn = "O";
  } else {
    document.turn = "X";
  }
}
