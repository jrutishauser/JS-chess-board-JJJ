var _ = require('lodash'); 
var board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];

function print(board){
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){
      // Before any cells are printed...
      console.log({
          'row': "<tr>" // print the table row
      });   
      _.forEach(row, function(square, file){
            console.log({
                'file': '<td></td>', // td for each square
                'square': square // shows blank space or letter for piece
            })
      }); // END foreach(row)
    console.log({
          'row': "</tr>"
      });
      // After all the cells are printed...
  }); // END foreach(board)
  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} 

print(board);