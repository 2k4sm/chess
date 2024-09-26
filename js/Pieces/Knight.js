import Piece from "./Piece.js";

class Knight extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'knight';
    }
    moves() {
        //TODO: Implement knight.
    }
}
export default Knight;