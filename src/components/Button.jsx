/* eslint-disable react/prop-types */
function Button({ handleClick }) {
  return (
    <div>
      <button
        onClick={() => handleClick()}
        className="py-2 px-3  rounded-lg text-lg bg-white border-[1px] border-black hover:bg-[#ffd7bd] transition duration-300"
      >
        Get Quote
      </button>
    </div>
  );
}

export default Button;
