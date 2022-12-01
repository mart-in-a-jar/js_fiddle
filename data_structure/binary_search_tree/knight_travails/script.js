// Tries every possible move from start position, until it reaches destination, and keeps travel history

function knight_travails([a, b], [x, y]) {
    const Square = (pos, moves) => {
        if (!inBoardRange([pos[0], pos[1]])) return null;
        return {
            pos,
            moves,
        };
    };

    function inBoardRange(arr) {
        for (let el of arr) {
            if (el < 0 || el > 7) return false;
        }
        return true;
    }
    if (!inBoardRange([a, b, x, y])) return console.error("Invalid square parameter");

    const moves = [
        [-1, 2],
        [-1, -2],
        [1, 2],
        [1, -2],
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
    ];

    let queue = [Square([a, b], [[a, b]])];
    currentSquare = queue.shift();

    while (!(currentSquare.pos[0] === x && currentSquare.pos[1] === y)) {
        for (let move of moves) {
            next = [
                currentSquare.pos[0] + move[0],
                currentSquare.pos[1] + move[1],
            ];
            let square = Square(next, currentSquare.moves.concat([next]));
            if (square) {
                queue.push(square);
            }
        }
        currentSquare = queue.shift();
    }

    console.log(
        `Made it from ${a},${b} to ${x},${y} in ${
            currentSquare.moves.length - 1
        } moves. Path was:`
    );
    for (let move of currentSquare.moves) console.log(move.toString());
}

knight_travails([0, 0], [7, 5]);
