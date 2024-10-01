import { posinbounds } from '../utility.js';

function Rook(color, pos) {
    Piece.call(this, color, pos);
    this.type = 'rook';
}

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;


Rook.prototype.moves = function() {
    let possibleMoves = [];
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    
    for (let i = 0; i < 4; i++) {
        let x = this.pos.x + dx[i];
        let y = this.pos.y + dy[i];
        
        while (posinbounds({x, y})) {
            let piece = window.bobj.getpiece({x, y});
            if (piece) {
                if (piece.color !== this.color) {
                    possibleMoves.push({x, y});
                }
                break;
            }
            possibleMoves.push({x, y});
            x += dx[i];
            y += dy[i];
        }
    }
    return possibleMoves;
};

export default Rook;
