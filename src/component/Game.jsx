import Board from "./Board";
import { calculateWinner } from "./GameFunction";
import History from "./History";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const currentValue = history[currentHistoryIndex];
  console.log(history.length);

  let winStatus;
  const winner = calculateWinner(currentValue);

  winner == null
    ? (winStatus = `Next player: ${xIsNext ? "X" : "O"}`)
    : (winStatus = `winner: ${winner[0]}`);

  function gameController(nextValue, xIsNext) {
    const slicedHistory = [
      ...history.slice(0, currentHistoryIndex + 1),
      nextValue,
    ];
    setHistory(slicedHistory);
    setxIsNext(!xIsNext);
    setCurrentHistoryIndex(slicedHistory.length - 1);
  }

  function historyButtonClick(index) {
    setCurrentHistoryIndex(index);
    setxIsNext(index % 2 == 0);
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
