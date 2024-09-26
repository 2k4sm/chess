import { bobj } from "./chessboard.js";

const idtopos = (id) => {
    return { x: 8 - parseInt(id[1]), y: id.charCodeAt(0) - 97 };
}

const postoid = (pos) => {
    return String.fromCharCode(pos.y + 97) + (8 - pos.x);
}

const idto1d = (id) => {
    let pos = idtopos(id);
    return _2dto1d(pos);
}

const _1dtoid = (n) => {
    return postoid({ x: Math.floor(n / 8), y: n % 8 });
}

const _1dto2d = (n) => {
    return { x: Math.floor(n / 8), y: n % 8 };
}

const _2dto1d = (pos) => {
    return pos.x * 8 + pos.y;
}

const posinbounds = (pos) => {
    return pos.x >= 0 && pos.x < 8 && pos.y >= 0 && pos.y < 8;
}

const imgpath = {
    'black': {
        'king': './imgs/Chess_kdt45.svg',
        'queen': './imgs/Chess_qdt45.svg',
        'rook': './imgs/Chess_rdt45.svg',
        'bishop': './imgs/Chess_bdt45.svg',
        'knight': './imgs/Chess_ndt45.svg',
        'pawn': './imgs/Chess_pdt45.svg',
    },
    'white': {
        'king': './imgs/Chess_klt45.svg',
        'queen': './imgs/Chess_qlt45.svg',
        'rook': './imgs/Chess_rlt45.svg',
        'bishop': './imgs/Chess_blt45.svg',
        'knight': './imgs/Chess_nlt45.svg',
        'pawn': './imgs/Chess_plt45.svg',
    }
}

const handlelablesandhighlights = (s, i) => {
    let highlight = document.createElement('div');
    highlight.className = 'highlight';
    s.appendChild(highlight);

    if (i >= 56) {
        let label = document.createElement('div');
        label.className = 'labelbottom';
        label.classList.add('bottom');
        label.textContent = String.fromCharCode(97 + i % 8);
        s.appendChild(label);
    }

    if (i % 8 === 7) {
        let label = document.createElement('div');
        label.className = 'labelright';
        // label.classList.add('right');
        label.textContent = 8 - Math.floor(i / 8);
        s.appendChild(label);
    }
}

const setBoard = () => {
    let boardhtml = document.getElementById('board');
    boardhtml.innerHTML = '';
    for (let i = 0; i < 64; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.id = _1dtoid(i);
        square.classList.add((((Math.floor(i / 8) + i) % 2 === 0) ? 'white' : 'black'));
        handlelablesandhighlights(square, i);
        boardhtml.appendChild(square);
    }
}
const setPieces = (board8v8) => // board8v8 is an 2d array of pieces objects
{
    // setBoard();
    let board = document.getElementById('board');
    let squares = board.getElementsByClassName('square');
    for (let i = 0; i < 64; i++) {
        let square = squares[i];
        square.innerHTML = '';
        handlelablesandhighlights(square, i);
        let piece = board8v8[_1dto2d(i).x][_1dto2d(i).y];
        if (!piece) continue;
        let color = piece.color ? 'black' : 'white'
        let type = piece.type;
        let img = document.createElement('img');
        img.src = imgpath[color][type];
        square.appendChild(img);
    }
}
const getMoves = (color) => {
    // return a obj with keys as piece id and values as array of possible moves
    let moves = {};
    let pieces = bobj.pieces();
    for (let piece of pieces)
        if (piece.color === color) {
            moves[piece.id] = piece.moves();
            // console.log(piece.type,piece.id, moves[piece.id]);
        }
    return moves;
}

const dehighlightMoves = () => {
    const squares = Array.from(document.getElementsByClassName('square'));
    squares.forEach(square => {
        square.querySelector('.highlight').style.display = 'none';
    });
};

const filterMoves = (moves) => {
    const filteredMoves = {};

    for (const piece in moves) {
        const piecePos = idtopos(piece);
        const pieceObj = bobj.getpiece(piecePos);
        const possibleMoves = moves[piece];
        const validMoves = [];

        possibleMoves.forEach(move => {
            const capturedPiece = bobj.getpiece(move);
            bobj.setpiece(pieceObj, move);
            bobj.setpiece(null, piecePos);

            if (!isKingInCheck(bobj.turn)) validMoves.push(move);

            bobj.setpiece(pieceObj, piecePos);
            bobj.setpiece(capturedPiece, move);
        });

        filteredMoves[piece] = validMoves;
    }

    return filteredMoves;
};

const highlightMoves = (moves, pieceId) => {
    const squares = Array.from(document.getElementsByClassName('square'));
    const pieceMoves = moves[pieceId];

    pieceMoves.forEach(move => {
        const index = _2dto1d(move);
        const highlight = squares[index].querySelector('.highlight');
        highlight.style.display = 'block';
    });
};

const isKingInCheck = (color) => {
    const kingPos = bobj.getKingPos(color);
    const pieces = bobj.pieces();

    return pieces.some(piece => {
        if (piece.color !== color) {
            const pieceMoves = piece.moves();
            return pieceMoves.some(move => move.x === kingPos.x && move.y === kingPos.y);
        }
        return false;
    });
};



export {
    idtopos,
    postoid,
    idto1d,
    _1dtoid,
    _1dto2d,
    posinbounds,
    setBoard,
    setPieces,
    getMoves,
    _2dto1d,
    highlightMoves,
    filterMoves,
    dehighlightMoves
};