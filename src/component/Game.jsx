import Board from "./Board";
import { calculateWinner } from "./GameFunction";
import History from "./History";
import { useState } from "react";

export default function Game() {
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
    <div className="flex justify-center items-center h-screen ">
      <div>
        <Board
          value={value}
          winner={winner}
          winStatus={winStatus}
          handleClick={handleClick}
        ></Board>
      </div>
      <div>
        <History />
      </div>
    </div>
  );
}
