import React, { memo } from "react";

function Child({ onClickHandler }) {
  return (
    <button onClick={() => onClickHandler((prev) => prev + 1)}>add</button>
  );
}
export default memo(Child);

// React.memo(컴포넌트) -> 프롭스가 변하지 않으면 이 컴포넌트를 렌더링하지 않겠다.
