import Pawn from './Pieces/Pawn.js';
import Rook from './Pieces/Rook.js';
import Knight from './Pieces/Knight.js';
import Bishop from './Pieces/Bishop.js';
import Queen from './Pieces/Queen.js';
import King from './Pieces/King.js';
import { posinbounds } from './utility.js';

function Chess() {
    this.board = [];
    for (let i = 0; i < 8; i++) {
        this.board.push([]);
        for (let j = 0; j < 8; j++) this.board[i].push(null);
    }

    this.board[0][0] = new Rook(true, { x: 0, y: 0 });
    this.board[0][1] = new Knight(true, { x: 0, y: 1 });
    this.board[0][2] = new Bishop(true, { x: 0, y: 2 });
    this.board[0][3] = new Queen(true, { x: 0, y: 3 });
    this.board[0][4] = new King(true, { x: 0, y: 4 });
    this.board[0][5] = new Bishop(true, { x: 0, y: 5 });
    this.board[0][6] = new Knight(true, { x: 0, y: 6 });
    this.board[0][7] = new Rook(true, { x: 0, y: 7 });
    for (let i = 0; i < 8; i++) this.board[1][i] = new Pawn(true, { x: 1, y: i });

    this.board[7][0] = new Rook(false, { x: 7, y: 0 });
    this.board[7][1] = new Knight(false, { x: 7, y: 1 });
    this.board[7][2] = new Bishop(false, { x: 7, y: 2 });
    this.board[7][3] = new Queen(false, { x: 7, y: 3 });
    this.board[7][4] = new King(false, { x: 7, y: 4 });
    this.board[7][5] = new Bishop(false, { x: 7, y: 5 });
    this.board[7][6] = new Knight(false, { x: 7, y: 6 });
    this.board[7][7] = new Rook(false, { x: 7, y: 7 });
    for (let i = 0; i < 8; i++) this.board[6][i] = new Pawn(false, { x: 6, y: i });

    this.turn = false;
    this.moves = [];
    this.whiteKing = { x: 7, y: 4 };
    this.blackKing = { x: 0, y: 4 };
    this.piece_selected = null;
}

Chess.prototype.pieces = function () {
    let pieces = [];
    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 8; j++)
            if (this.board[i][j]) pieces.push(this.board[i][j]);
    return pieces;
};

Chess.prototype.getKingPos = function (color) {
    return color ? this.blackKing : this.whiteKing;
};

Chess.prototype.setpiece = function (piece, pos) {
    if (posinbounds(pos)) {
        this.board[pos.x][pos.y] = piece;
        if (piece === null) return;
        if (piece.type === 'king') {
            if (!piece.color) this.whiteKing = pos;
            else this.blackKing = pos;
        }
        piece.setpos(pos);
    }
};

Chess.prototype.getpiece = function (pos) {
    if (posinbounds(pos)) {
        return this.board[pos.x][pos.y];
    }
};

Chess.prototype.move = function (from, to) {
    let piece = this.getpiece(from);
    let capturedPiece = this.getpiece(to);
    this.setpiece(null, from);
    this.setpiece(piece, to);
    this.moves.push({ from, to, piece, capturedPiece });
    if (piece.type === 'king') {
        if (!piece.color) this.whiteKing = to;
        else this.blackKing = to;
    }
};

export default Chess;
