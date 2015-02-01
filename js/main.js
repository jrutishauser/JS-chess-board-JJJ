function print(){

    var rowIdentifier = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    document.write('<table>');

    var index = 0;

    _.forEach(board, function(row, key){

        document.write("<tr>");
        var idNumber = 1;

        _.forEach(row, function(square, k){

            var squareId = rowIdentifier[index] + idNumber;

            document.write("<td id=" + squareId + ">" + square + "</td>")
            idNumber++;

        });

        index++;
        document.write("</tr>");
    });

    document.write('</table>');
}



//function print(board){
//    document.write('<div class="container">'); // need something better this rewures everything
//    document.write('<table class="chessboard">'); // need something better this rewures everything
//
//    _.forEach(board, function(row, key){ // need something better this rewures everything
//        document.write('<tr>'); // need something better this rewures everything
//        _.forEach(row, function(square, k){ // need something better this rewures everything
//            document.write('<td>' + square + '</td>'); // need something better this rewures everything
//
//        });
//        document.write('</tr>'); // need something better this rewures everything
//    });
//
//    document.write('</table>');
//        document.write('</div>');
//}

var board = {};
board.a = {
    'one': '<span class="piece black rook"></span>',
    'two': '<span class="piece black knight"></span>',
    'three': '<span class="piece black bishop"></span>',
    'four': '<span class="piece black queen"></span>',
    'five': '<span class="piece black king"></span>',
    'six': '<span class="piece black bishop"></span>',
    'seven': '<span class="piece black knight"></span>',
    'eight': '<span class="piece black rook"></span>'
};
board.b = {
    'one': '<span class="piece black pawn"></span>',
    'two': '<span class="piece black pawn"></span>',
    'three': '<span class="piece black pawn"></span>',
    'four': '<span class="piece black pawn"></span>',
    'five': '<span class="piece black pawn"></span>',
    'six': '<span class="piece black pawn"></span>',
    'seven': '<span class="piece black pawn"></span>',
    'eight': '<span class="piece black pawn"></span>'
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
    'one': '<span class="piece white pawn"></span>',
    'two': '<span class="piece white pawn"></span>',
    'three': '<span class="piece white pawn"></span>',
    'four': '<span class="piece white pawn"></span>',
    'five': '<span class="piece white pawn"></span>',
    'six': '<span class="piece white pawn"></span>',
    'seven': '<span class="piece white pawn"></span>',
    'eight': '<span class="piece white pawn"></span>'
};
board.h = {
    'one': '<span class="piece white rook"></span>',
    'two': '<span class="piece white knight"></span>',
    'three': '<span class="piece white bishop"></span>',
    'four': '<span class="piece white queen"></span>',
    'five': '<span class="piece white king"></span>',
    'six': '<span class="piece white bishop"></span>',
    'seven': '<span class="piece white knight"></span>',
    'eight': '<span class="piece white rook"></span>'
};
print(board);

//var moveMe = function (container) { // after we figure out a better write we need to work on multiple moves.
//    board.c.three = board.a.one;
//    board.a.one = '';
//    print(board);
//}
function movePiece(){
    var lContent = document.getElementById('g4').innerHTML;
    document.getElementById('g4').innerHTML = "";
    document.getElementById('e4').innerHTML = lContent;
}

function movePiece2() {
    var lContent = document.getElementById('a7').innerHTML;
    document.getElementById('a7').innerHTML = "",
    document.getElementById('c6').innerHTML = lContent;
}

function movePiece3() {
    var lContent = document.getElementById('g3').innerHTML;
    document.getElementById('g3').innerHTML = "",
    document.getElementById('e3').innerHTML = lContent;
}

function movePiece4() {
    var lContent = document.getElementById('b5').innerHTML;
    document.getElementById('b5').innerHTML = "",
    document.getElementById('c5').innerHTML = lContent;
}

function movePiece5() {
    var lContent = document.getElementById('g7').innerHTML;
    document.getElementById('g7').innerHTML = "",
    document.getElementById('f7').innerHTML = lContent;
}

function movePiece6() {
    var lContent = document.getElementById('b4').innerHTML;
    document.getElementById('b4').innerHTML = "",
    document.getElementById('d4').innerHTML = lContent;
}

function movePiece7() {
    var lContent = document.getElementById('h6').innerHTML;
    document.getElementById('h6').innerHTML = "",
    document.getElementById('g7').innerHTML = lContent;
}

function movePiece8() {
    var lContent = document.getElementById('a6').innerHTML;
    document.getElementById('a6').innerHTML = "",
    document.getElementById('b5').innerHTML = lContent;
}

function movePiece9() {
    var lContent = document.getElementById('h7').innerHTML;
    document.getElementById('h7').innerHTML = "",
    document.getElementById('f6').innerHTML = lContent;
}
