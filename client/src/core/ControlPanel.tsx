import React, { useRef } from "react";
import { countVariable } from "../store/cache/cacheVariables";

function ControlPanel() {
  const num = useRef<HTMLInputElement>();
  const increment = (num: number) => {
    countVariable(countVariable() + num);
  };
  const decrement = (num: number) => {
    countVariable(countVariable() - num);
  };
  return (
    <div className="ControlPanel flex flex-col items-center">
      <div className="flex m-2">
        <button
          className="bg-green-300 border-2 border-black px-6 py-2 m-4"
          onClick={() => increment(num.current ? Number(num.current.value) : 1)}
        >
          +
        </button>
        <button
          className="bg-red-300 border-2 border-black px-6 py-2 m-4"
          onClick={() => decrement(num.current ? Number(num.current.value) : 1)}
        >
          -
        </button>
      </div>

      <input
        className="border-black border-2 text-center"
        ref={num as React.RefObject<HTMLInputElement>}
        type={"number"}
        defaultValue={1}
      />
    </div>
  );
}

export default ControlPanel;
