export default function Square({ currentValue, ikey, handleClick, color }) {
  let green;
  let red;
  if (color.length != 0 && color[1].includes(ikey)) {
    green = true;
  } else {
    green = false;
  }

  if (currentValue != null && currentValue != color[0] && color.length != 0) {
    red = true;
  } else {
    red = false;
  }
  return (
    <>
      <button
        className={
          green == true
            ? "bg-green-300 border border-gray-400 h-20 w-20 m-1 leading-9 text-lg "
            : red == true
            ? "bg-red-300 border border-gray-400 h-20 w-20 m-1 leading-9 text-lg"
            : "bg-white border border-gray-400 h-20 w-20 m-1 leading-9 text-lg"
        }
        onClick={handleClick}
      >
        {currentValue}
      </button>
    </>
  );
}
