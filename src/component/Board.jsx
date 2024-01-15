import { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Game";

export default function Board() {
  const [value, setValue] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  let winStatus;
  const winner = calculateWinner(value);

  winner == null
    ? (winStatus = `Next player: ${xIsNext ? "X" : "O"}`)
    : (winStatus = `winner: ${winner[0]}`);
  function handleClick(i) {
    const nextValue = value.slice();
    if (value[i] == null && winner == null) {
      xIsNext ? (nextValue[i] = "X") : (nextValue[i] = "O");
      setxIsNext(!xIsNext);
      setValue(nextValue);
    }
  }
  return (
    <>
      <h2>{winStatus}</h2>

      <div className="flex align-middle justify-center">
        <Square
          value={value[0]}
          ikey={0}
          handleClick={() => handleClick(0)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[1]}
          ikey={1}
          handleClick={() => handleClick(1)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[2]}
          ikey={2}
          handleClick={() => handleClick(2)}
          color={winner == null ? [] : winner}
        ></Square>
      </div>
      <div className="flex align-middle justify-center">
        <Square
          value={value[3]}
          ikey={3}
          handleClick={() => handleClick(3)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[4]}
          ikey={4}
          handleClick={() => handleClick(4)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[5]}
          ikey={5}
          handleClick={() => handleClick(5)}
          color={winner == null ? [] : winner}
        ></Square>
      </div>
      <div className="flex align-middle justify-center">
        <Square
          value={value[6]}
          ikey={6}
          handleClick={() => handleClick(6)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[7]}
          ikey={7}
          handleClick={() => handleClick(7)}
          color={winner == null ? [] : winner}
        ></Square>
        <Square
          value={value[8]}
          ikey={8}
          handleClick={() => handleClick(8)}
          color={winner == null ? [] : winner}
        ></Square>
      </div>
    </>
  );
}
