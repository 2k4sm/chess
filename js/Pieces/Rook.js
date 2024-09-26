import Piece from "./Piece.js";
class Rook extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'rook';
    }
    moves() {
        //TODO: Implement knight.

    }
}

export default Rook;