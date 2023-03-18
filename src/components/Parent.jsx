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

// useCallback은 함수 생성을 막는 것이 아니라 새로운 함수와 이전 함수 중 어떤 것을 리턴할 것인지 고르는 것이다.
