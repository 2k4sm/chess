import Piece from './Piece.js';
import { posinbounds } from '../utility.js';

class Knight extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'knight';
    }

    moves() {
        let possibleMoves = [];

        let directions = [
            { dx: -2, dy: -1 }, { dx: -2, dy: 1 },
            { dx: -1, dy: -2 }, { dx: -1, dy: 2 },
            { dx: 1, dy: -2 }, { dx: 1, dy: 2 },
            { dx: 2, dy: -1 }, { dx: 2, dy: 1 }
        ];

        for(let dir of directions){
            let x = this.pos.x + dir.dx;
            let y = this.pos.y + dir.dy;

            if(posinbounds({ x, y })){
                let piece = window.bobj.getpiece({ x, y });

                if(!piece || piece.color !== this.color){
                    possibleMoves.push({ x, y });
                }
            }
        }

        return possibleMoves;
    }
}

export default Knight;
