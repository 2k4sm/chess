import Piece from "./Piece.js";
class Queen extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'queen';
    }

    // Queen can move in any direction any number of squares
    moves() {
        //TODO: Implement knight.

    }
}
export default Queen;