import Piece from './Piece.js';
import { posinbounds } from '../utility.js';

class Pawn extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'pawn';
    }

    moves() {
        let moves = [];
        let x = this.pos.x;
        let y = this.pos.y;
        let bobj = window.bobj;
        if(this.color) // black
        {
            if (x === 1)
            {
                if (!bobj.getpiece({x: x + 1, y}))
                {
                    moves.push({x: x + 1, y});
                    if (!bobj.getpiece({x: x + 2, y}))
                    {
                        moves.push({x: x + 2, y});
                    }
                }
            } 
            else
            {
                if (!bobj.getpiece({x: x + 1, y}))
                {
                    moves.push({x: x + 1, y});
                }
            }
            // Capture
            if (bobj.getpiece({x: x + 1, y: y + 1}) && bobj.getpiece({x: x + 1, y: y + 1}).color !== this.color)
            {
                moves.push({x: x + 1, y: y + 1});
            }
            if (bobj.getpiece({x: x + 1, y: y - 1}) && bobj.getpiece({x: x + 1, y: y - 1}).color !== this.color)
            {
                moves.push({x: x + 1, y: y - 1});
            }
        }
        else
        {
            if (x === 6)
            {
                if (!bobj.getpiece({x: x - 1, y}))
                {
                    moves.push({x: x - 1, y});
                    if (!bobj.getpiece({x: x - 2, y}))
                    {
                        moves.push({x: x - 2, y});
                    }
                }
            } 
            else
            {
                if (!bobj.getpiece({x: x - 1, y}))
                {
                    moves.push({x: x - 1, y});
                }
            }
            // Capture
            if (bobj.getpiece({x: x - 1, y: y + 1}) && bobj.getpiece({x: x - 1, y: y + 1}).color !== this.color)
            {
                moves.push({x: x - 1, y: y + 1});
            }
            if (bobj.getpiece({x: x - 1, y: y - 1}) && bobj.getpiece({x: x - 1, y: y - 1}).color !== this.color)
            {
                moves.push({x: x - 1, y: y - 1});
            }
        }
        return moves;

    }
}

export default Pawn;