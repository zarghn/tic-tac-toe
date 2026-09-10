function Cell({ value, onClick }) {
  return (
    <div className="cell" onClick={onClick}>
      {value === "X" && <div className="mark-circle"></div>}
      {value === "O" && (
        <svg className="mark-triangle" viewBox="0 0 70 62">
          <polygon
            points="35,4 66,58 4,58"
            fill="#34a8c0"
            stroke="#171512"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default Cell;