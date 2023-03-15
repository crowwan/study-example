import React, { useCallback, useState, useMemo } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent({ children }) {
  const [count, setCount] = useState(0);
  const needMemo = {
    name: "test",
    id: 1,
  };

  const onClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child2 item={needMemo} />
      <div>{count}</div>

      <Child onClickHandler={onClickHandler} />
      {/* {children} */}
      {/* <Child onClickHandler={setCount}/> */}
    </div>
  );
}

export default Parent;
