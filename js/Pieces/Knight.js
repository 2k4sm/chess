// Knight.js
import Piece from './Piece.js';
import { posinbounds } from '../utility.js';

class Knight extends Piece{
    constructor(color, position){
        super(color, position);
        this.type = 'knight';
    }

    moves(board){

        const movesDir = [
            { x: -2, y: -1 }, { x: -2, y: 1 },
            { x: -1, y: -2 }, { x: -1, y: 2 },
            { x: 1, y: -2 }, { x: 1, y: 2 },
            { x: 2, y: -1 }, { x: 2, y: 1 }
        ];

        let possibleMoves = [];

        for(let dir of movesDir){
            const newPos = { x: this.pos.x + dir.x, y: this.pos.y + dir.y };

            if(posinbounds(newPos)){
                const targetPiece = board[newPos.x][newPos.y];
                
                if(!targetPiece || targetPiece.color !== this.color){
                    possibleMoves.push(newPos);
                }
            }
        }

        return possibleMoves;
    }
}

export default Knight;
