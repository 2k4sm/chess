import Piece from "./Piece.js";
import { posinbounds } from "../utility.js";

class Bishop extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'bishop';
    }

    moves(board) {
        const directions = [
            { x: 1, y: 1 },
            { x: 1, y: -1 },
            { x: -1, y: 1 },
            { x: -1, y: -1 }
        ];
        let possibleMoves = [];

        for (let direction of directions) {
            let x = this.pos.x + direction.x;
            let y = this.pos.y + direction.y;

            while (posinbounds({ x, y })) {
                if (board[x][y] === null) {
                    possibleMoves.push({ x, y });
                } else if (board[x][y].color !== this.color) {
                    possibleMoves.push({ x, y });
                    break;
                } else {
                    break;
                }
                x += direction.x;
                y += direction.y;
            }
        }

        return possibleMoves;
    }
}

export default Bishop;