import Piece from './Piece.js';
export default
    class King extends Piece {
    constructor(color, pos) {
        super(color, pos);
        this.type = 'king';
    }
    // other methods
    moves() {
        //TODO: Implement how to move king.
    }
}