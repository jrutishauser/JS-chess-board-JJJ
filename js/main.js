var board = [];

//@@@@@@ this board builder is what dave gave us. @@@@
// @@@@@@ keep in mind he wanted us to build the board from our javascript array@@@@@


function print(board){
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, rank){

      // Before any cells are printed...

      _.forEach(row, function(square, file){

          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)

      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print



// will house references to all pieces
var pieces = [];

// piece constructor. when used like new piece() it will 
// make a new instance of a piece
var piece = function(type, color, x, y) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.assignCell = function(x, y) {
        board[x][y] = this;
    };
};


var generatePieces = function() {
    // have 8 * 8 loop make all 32 pieces
    
    // rooks
    pieces.push(new piece('rook', 'white', 0, 0));
    pieces.push(new piece('rook', 'white', 7, 0));
    pieces.push(new piece('rook', 'black', 0, 7));
    pieces.push(new piece('rook', 'black', 7, 7));

    pieces.push(new piece('knight', 'white', 1, 0));
    pieces.push(new piece('knight', 'white', 6, 0));
    pieces.push(new piece('knight', 'black', 7, 6));
    pieces.push(new piece('knight', 'black', 7, 1));

    // do this for the rest of the pieces
    pieces.push(new piece('bishop', 'white', 0, 0));
    pieces.push(new piece('bishop', 'white', 7, 0));
    pieces.push(new piece('bishop', 'black', 0, 7));
    pieces.push(new piece('bishop', 'black', 7, 7));

};

var generateBoard = function() {
    // have 8 * 8 make array "2-dimensional matrix"
    // during this phase you will simply make a large matrix full of board references
    // alternatively do
    peices[0].assignCell(0,0);
    
    board[0] = [];
    board[0][0] = peices[0];
};
