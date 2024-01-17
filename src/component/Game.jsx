import Board from "./Board";
import { calculateWinner } from "./GameFunction";
import History from "./History";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);

  const currentValue = history[history.length - 1];
  console.log(history.length);

  let winStatus;
  const winner = calculateWinner(currentValue);

  winner == null
    ? (winStatus = `Next player: ${xIsNext ? "X" : "O"}`)
    : (winStatus = `winner: ${winner[0]}`);

  function gameController(nextValue, xIsNext) {
    setHistory([...history, nextValue]);
    setxIsNext(!xIsNext);
  }

  function historyButtonClick(index) {
    const slicedArray = history.slice(0, index + 1);
    setHistory(slicedArray);
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <Board
          currentValue={currentValue}
          winner={winner}
          winStatus={winStatus}
          xIsNext={xIsNext}
          gameController={gameController}
        ></Board>
      </div>
      <div>
        <History histories={history} historyButtonClick={historyButtonClick} />
      </div>
    </div>
  );
}
