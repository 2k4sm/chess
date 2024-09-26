import { postoid } from "../utility.js";
class Piece {
    constructor(color, pos) // pos is a obgect with x and y properties // color is a boolean (true = white, false = black)
    {
        this.pos = pos;
        this.color = color;
        this.type;
        this.id = postoid(pos);
        this.hasMoved = false;
    }
    setpos(pos) {
        this.pos = pos;
        this.id = postoid(pos);
    }
}
export default Piece;