import React, { useState } from 'react';

export const FlappyBird = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                setWinner(newBoard[a]);
                return;
            }
        }

        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setPlayer('X');
        setWinner(null);
    };

    const renderCell = (index) => {
        return (
            <div className="cell" onClick={() => handleClick(index)}>
                {board[index]}
            </div>
        );
    };

    return (
        <div className="board">
            {board.map((cell, index) => renderCell(index))}
            {winner && (
                <div className="winner">
                    Winner: {winner}
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}
        </div>
    );
};


