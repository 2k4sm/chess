import Piece from './Piece.js';
import { posinbounds } from '../utility.js';
export default
    class King extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'king';
    }

    moves() {
        const directions = [
            { dx: -1, dy: -1 }, { dx: -1, dy: 0 }, { dx: -1, dy: 1 },
            { dx: 0, dy: -1 }, { dx: 0, dy: 1 },
            { dx: 1, dy: -1 }, { dx: 1, dy: 0 }, { dx: 1, dy: 1 }
        ];

        let possibleMoves = [];

        directions.forEach(({ dx, dy }) => {
            const newX = this.pos.x + dx;
            const newY = this.pos.y + dy;

            if (!posinbounds({ x: newX, y: newY })) return;

            const pieceAtPosition = window.bobj.getpiece({ x: newX, y: newY });

            if (pieceAtPosition && pieceAtPosition.color === this.color) return;

            possibleMoves.push({ x: newX, y: newY });
        });

        return possibleMoves;

    }
}