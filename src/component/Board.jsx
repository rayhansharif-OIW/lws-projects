import Square from "./Square";

export default function Board({
  currentValue,
  winner,
  winStatus,
  xIsNext,
  gameController,
}) {
  function handleClick(i) {
    const nextValue = currentValue.slice();
    if (currentValue[i] == null && winner == null) {
      xIsNext ? (nextValue[i] = "X") : (nextValue[i] = "O");
      gameController(nextValue, xIsNext);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="shadow-lg">
          <h2 className="flex items-center justify-center bg-orange-200 mx-[4.2px]">
            {winStatus}
          </h2>

          <div className="flex items-center justify-center ">
            <Square
              currentValue={currentValue[0]}
              ikey={0}
              handleClick={() => handleClick(0)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[1]}
              ikey={1}
              handleClick={() => handleClick(1)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[2]}
              ikey={2}
              handleClick={() => handleClick(2)}
              color={winner == null ? [] : winner}
            ></Square>
          </div>
          <div className="flex align-middle justify-center">
            <Square
              currentValue={currentValue[3]}
              ikey={3}
              handleClick={() => handleClick(3)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[4]}
              ikey={4}
              handleClick={() => handleClick(4)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[5]}
              ikey={5}
              handleClick={() => handleClick(5)}
              color={winner == null ? [] : winner}
            ></Square>
          </div>
          <div className="flex align-middle justify-center">
            <Square
              currentValue={currentValue[6]}
              ikey={6}
              handleClick={() => handleClick(6)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[7]}
              ikey={7}
              handleClick={() => handleClick(7)}
              color={winner == null ? [] : winner}
            ></Square>
            <Square
              currentValue={currentValue[8]}
              ikey={8}
              handleClick={() => handleClick(8)}
              color={winner == null ? [] : winner}
            ></Square>
          </div>
        </div>
      </div>
    </>
  );
}
