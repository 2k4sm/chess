import Piece from "./Piece.js";
class Rook extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'rook';
    }
    moves() {
        let possibleMoves = [];

        let directions = [
            { dx: 1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: -1 }
        ];
        
        for (let direction of directions) {
            let x = this.pos.x + direction.dx;
            let y = this.pos.y + direction.dy;
            
            while (posinbounds({ x, y })) {
                let piece = window.bobj.getpiece({ x, y });
                
                if (piece) {
                    if (piece.color !== this.color) {
                        possibleMoves.push({ x, y });
                    }
                    break;
                }
                
                possibleMoves.push({ x, y });
                x += direction.dx;
                y += direction.dy;
            }
        }
        
        return possibleMoves;
        
    }
}

export default Rook;