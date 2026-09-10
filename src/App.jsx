import { useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [squares, setSquares] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [xIsNext, setXIsNext] = useState(true);

  function handleCellClick(index) {
    if (squares[index] !== null || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  const isDraw =
    squares.every((squareValue) => squareValue !== null) && !winner;
  return (
    <div className="scene">
      <div className="card">
        <GameStatus xIsNext={xIsNext} winner={winner} isDraw={isDraw} />

        <div className="body">
          <img className="grids-overlay" src="/img/vector-grids.png" alt="" />
          <img
            className="number-tag"
            src="/img/2.png"
            alt="winner number 2 / player number 2"
          />

          <Board squares={squares} onCellClick={handleCellClick} />

          <img className="tag1-ribbon" src="/img/1.png" alt="player number 1" />
        </div>

        <div className="bottombar">
          <span className="word">tic</span>
          <span className="dash teal"></span>
          <span className="word">tac</span>
          <span className="dash pink"></span>
          <span className="word">toe</span>
        </div>
      </div>

      <div className="side">
        <img
          className="character"
          src="/img/vector.png"
          alt="character illustration"
        />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] !== null
    ) {
      return squares[a];
    }
  }
  return null;
}

export default App;
