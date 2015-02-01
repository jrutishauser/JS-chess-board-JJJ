function print(board){
    document.write('<div class="container">'); // need something better this rewures everything
    document.write('<table class="chessboard">'); // need something better this rewures everything

    _.forEach(board, function(row, key){ // need something better this rewures everything
        document.write('<tr>'); // need something better this rewures everything
        _.forEach(row, function(square, k){ // need something better this rewures everything
            document.write('<td>' + square + '</td>'); // need something better this rewures everything

        });
        document.write('</tr>'); // need something better this rewures everything
    });

    document.write('</table>');
        document.write('</div>');


}

var board = {};
board.a = {
    'one': '<span class="piece black rook">&#9820;</span>',
    'two': '<span class="piece black knight">&#9822;</span>',
    'three': '<span class="piece black bishop">&#9821;</span>',
    'four': '<span class="piece black queen">&#9819;</span>',
    'five': '<span class="piece black king">&#9818;</span>',
    'six': '<span class="piece black bishop">&#9821;</span>',
    'seven': '<span class="piece black knight">&#9822;</span>',
    'eight': '<span class="piece black rook">&#9820;</span>'
};
board.b = {
    'one': '<span class="piece black pawn">&#9823;</span>',
    'two': '<span class="piece black pawn">&#9823;</span>',
    'three': '<span class="piece black pawn">&#9823;</span>',
    'four': '<span class="piece black pawn">&#9823;</span>',
    'five': '<span class="piece black pawn">&#9823;</span>',
    'six': '<span class="piece black pawn">&#9823;</span>',
    'seven': '<span class="piece black pawn">&#9823;</span>',
    'eight': '<span class="piece black pawn">&#9823;</span>'
};
board.c = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.d = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.e = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.f = {
    'one': '',
    'two': '',
    'three': '',
    'four': '',
    'five': '',
    'six': '',
    'seven': '',
    'eight': ''
};
board.g = {
    'one': '<span class="piece white pawn">&#9823;</span>',
    'two': '<span class="piece white pawn">&#9823;</span>',
    'three': '<span class="piece white pawn">&#9823;</span>',
    'four': '<span class="piece white pawn">&#9823;</span>',
    'five': '<span class="piece white pawn">&#9823;</span>',
    'six': '<span class="piece white pawn">&#9823;</span>',
    'seven': '<span class="piece white pawn">&#9823;</span>',
    'eight': '<span class="piece white pawn">&#9823;</span>'
};
board.h = {
    'one': '<span class="piece white rook">&#9820;</span>',
    'two': '<span class="piece white knight">&#9822;</span>',
    'three': '<span class="piece white bishop">&#9821;</span>',
    'four': '<span class="piece white queen">&#9819;</span>',
    'five': '<span class="piece white king">&#9818;</span>',
    'six': '<span class="piece white bishop">&#9821;</span>',
    'seven': '<span class="piece white knight">&#9822;</span>',
    'eight': '<span class="piece white rook">&#9820;</span>'
};
print(board);

var moveMe = function (container) { // after we figure out a better write we need to work on multiple moves.
    board.c.three = board.a.one;
    board.a.one = '';
    print(board);
}

