import Cell from "./Cell";
function Board({ squares, onCellClick }) {
  return (
    <div className="board">
      {squares.map((squareValue, index) => (
        <Cell
          key={index}
          value={squareValue}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
}
export default Board;

