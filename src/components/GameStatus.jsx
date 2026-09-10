function GameStatus({ xIsNext, winner, isDraw }) {
  let message;
  let label;

  if (isDraw) {
    label = "draw =";
    message = "...";
  } else if (winner) {
    label = "winner is =";
    message = winner === "X" ? "NO.1" : "NO.2";
  } else {
    label = "next is =";
    message = xIsNext ? "NO.1" : "NO.2";
  }

  return (
    <div className="topbar">
      {label}<span className="highlight">{message}</span>
    </div>
  );
}

export default GameStatus;