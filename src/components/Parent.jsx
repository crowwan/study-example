import React, { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>{count}</div>

      <Child onClickHandler={onClickHandler} />
      {/* <Child onClickHandler={setCount}/> */}
    </div>
  );
}

export default Parent;
