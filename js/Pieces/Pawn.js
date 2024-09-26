import Piece from './Piece.js';
class Pawn extends Piece {
    constructor(color, pos) {
        super(color, pos);
        super.type = 'pawn';
    }
    moves() {
        //TODO:Implement pawn.
    }
}
export default Pawn;