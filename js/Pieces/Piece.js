import { postoid } from "../utility.js";

function Piece(color, pos) {
    this.pos = pos;
    this.color = color;
    this.type = undefined;
    this.id = postoid(pos);
    this.hasMoved = false;
}

Piece.prototype.setpos = function (pos) {
    this.pos = pos;
    this.id = postoid(pos);
};

export default Piece;
