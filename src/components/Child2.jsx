import React from "react";

function Child2({ item }) {
  return (
    <>
      <div>name : {item.name}</div>
      <div>id : {item.id}</div>
    </>
  );
}

export default Child2;
// export default React.memo(Child2);
