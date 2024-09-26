import Piece from "./Piece.js";
class Bishop extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'bishop';
    }
    moves() {
        //TODO: Implement how to move Bishop.
    }
}
export default Bishop;