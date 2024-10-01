import Piece from './Piece.js';
import { posinbounds } from '../utility.js';

function Pawn(color, pos) {
    Piece.call(this, color, pos);
    this.type = 'pawn';
}

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

Pawn.prototype.moves = function () {
    let moves = [];
    let x = this.pos.x;
    let y = this.pos.y;
    let bobj = window.bobj;

    if (this.color) {
        if (x === 1) {
            if (!bobj.getpiece({ x: x + 1, y })) {
                moves.push({ x: x + 1, y });
                if (!bobj.getpiece({ x: x + 2, y })) {
                    moves.push({ x: x + 2, y });
                }
            }
        } else {
            if (!bobj.getpiece({ x: x + 1, y })) {
                moves.push({ x: x + 1, y });
            }
        }
        if (bobj.getpiece({ x: x + 1, y: y + 1 }) && bobj.getpiece({ x: x + 1, y: y + 1 }).color !== this.color) {
            moves.push({ x: x + 1, y: y + 1 });
        }
        if (bobj.getpiece({ x: x + 1, y: y - 1 }) && bobj.getpiece({ x: x + 1, y: y - 1 }).color !== this.color) {
            moves.push({ x: x + 1, y: y - 1 });
        }
    } else {
        if (x === 6) {
            if (!bobj.getpiece({ x: x - 1, y })) {
                moves.push({ x: x - 1, y });
                if (!bobj.getpiece({ x: x - 2, y })) {
                    moves.push({ x: x - 2, y });
                }
            }
        } else {
            if (!bobj.getpiece({ x: x - 1, y })) {
                moves.push({ x: x - 1, y });
            }
        }
        if (bobj.getpiece({ x: x - 1, y: y + 1 }) && bobj.getpiece({ x: x - 1, y: y + 1 }).color !== this.color) {
            moves.push({ x: x - 1, y: y + 1 });
        }
        if (bobj.getpiece({ x: x - 1, y: y - 1 }) && bobj.getpiece({ x: x - 1, y: y - 1 }).color !== this.color) {
            moves.push({ x: x - 1, y: y - 1 });
        }
    }

    return moves;
};

export default Pawn;
