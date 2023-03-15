import React from "react";

function Child({ onClickHandler }) {
  return <button onClick={onClickHandler}>add</button>;
  // return <button onClick={() => onClickHandler(prev => prev+1)}>add</button>;
}
export default Child;
// export default React.memo(Child);
