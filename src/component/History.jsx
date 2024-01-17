export default function History({ histories, historyButtonClick }) {
  // need a function to implement click event in this history button
  let copyHistory = [...histories];

  return (
    <div className="bg-red-100 h-[286px] w-[288px] shadow-lg grid-cols-1 overflow: scroll">
      <h1 className="flex items-center justify-center bg-orange-200 ">
        History
      </h1>
      <h3>{copyHistory.length}</h3>
      <div className=" flex flex-col overflow-y: scroll h-full ">
        {copyHistory.map((history, index) => {
          return (
            <button
              key={index}
              className="w-full my-1 bg-amber-200 "
              onClick={() => historyButtonClick(index)}
            >
              game level {index}
            </button>
          );
        })}
      </div>
    </div>
  );
}

//change will update the
