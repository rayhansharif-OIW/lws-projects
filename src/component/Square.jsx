export default function Square({ value, ikey, handleClick, color }) {
  let green;
  if (color != null && color[1].includes(ikey)) {
    green = true;
  } else {
    green = false;
  }
  return (
    <>
      <button
        className={
          green == false
            ? "bg-white border border-gray-400 h-20 w-20 m-1 leading-9 text-lg"
            : "bg-green-700 border border-gray-400 h-20 w-20 m-1 leading-9 text-lg"
        }
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
}
