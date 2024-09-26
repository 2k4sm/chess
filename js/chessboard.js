import Chess_Brd from "./Chess.js";
import { _1dto2d, _1dtoid, _2dto1d, getMoves, setBoard, setPieces } from "./utility.js";
const bobj = new Chess_Brd();
window.bobj = bobj;
let highlighed = false;
let selectedPiece = null;
setBoard();
setPieces(bobj.board);
let moves = getMoves(bobj.turn);
let squares = Array.from(document.getElementsByClassName('square'));
squares.forEach((s, i) => {
    s.addEventListener('click', () => {
        console.log("Clicked")

    });
});
export { bobj };