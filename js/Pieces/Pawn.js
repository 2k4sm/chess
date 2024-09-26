import Piece from './Piece.js';
import { posinbounds } from '../utility.js';

class Pawn extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'pawn';
    }

    moves(board) {
        let possibleMoves = [];
        let direction = this.color ? 1 : -1; // White moves up (-1), Black moves down (1)
        let startRow = this.color ? 1 : 6; // Starting row for white and black pawns

        // Move forward one square
        let forwardPos = { x: this.pos.x + direction, y: this.pos.y };
        if (posinbounds(forwardPos) && board[forwardPos.x][forwardPos.y] === null) {
            possibleMoves.push(forwardPos);

            // Move forward two squares if on starting row
            if (this.pos.x === startRow) {
                let doubleForwardPos = { x: this.pos.x + 2 * direction, y: this.pos.y };
                if (board[doubleForwardPos.x][doubleForwardPos.y] === null) {
                    possibleMoves.push(doubleForwardPos);
                }
            }
        }

        // Capture diagonally
        let captureLeft = { x: this.pos.x + direction, y: this.pos.y - 1 };
        let captureRight = { x: this.pos.x + direction, y: this.pos.y + 1 };
        if (posinbounds(captureLeft) && board[captureLeft.x][captureLeft.y] !== null && board[captureLeft.x][captureLeft.y].color !== this.color) {
            possibleMoves.push(captureLeft);
        }
        if (posinbounds(captureRight) && board[captureRight.x][captureRight.y] !== null && board[captureRight.x][captureRight.y].color !== this.color) {
            possibleMoves.push(captureRight);
        }

        return possibleMoves;
    }
}

export default Pawn;