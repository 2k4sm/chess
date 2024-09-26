import Chess_Brd from "./Chess.js";
import { _1dto2d, _1dtoid, _2dto1d, dehighlightMoves, filterMoves, getMoves, highlightMoves, idtopos, postoid, setBoard, setPieces } from "./utility.js";

const bobj = new Chess_Brd();
window.bobj = bobj;

let highlighed = false;
let selectedPiece = null;

setBoard();
setPieces(bobj.board);

let moves = getMoves(bobj.turn);
const squares = Array.from(document.getElementsByClassName('square'));

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        const piece = bobj.getpiece(_1dto2d(index));

        if (highlighed) {
            const highlight = square.querySelector('.highlight');
            if (highlight.style.display === 'block') {
                const from = selectedPiece.pos;
                const to = _1dto2d(index);
                bobj.move(from, to);
                setPieces(bobj.board);
                highlighed = false;
                selectedPiece = null;
                dehighlightMoves();
                bobj.turn = !bobj.turn;
                moves = filterMoves(getMoves(bobj.turn));
            } else if (piece && piece.color === bobj.turn) {
                selectedPiece = piece;
                dehighlightMoves();
                highlightMoves(moves, _1dtoid(index));
            } else {
                dehighlightMoves();
            }
        } else if (piece && piece.color === bobj.turn) {
            selectedPiece = piece;
            highlighed = true;
            highlightMoves(moves, _1dtoid(index));
        }
    });
});

export { bobj };
