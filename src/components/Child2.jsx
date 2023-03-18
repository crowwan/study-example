import React, { memo } from "react";

function Child2({ item }) {
  return (
    <div>
      name : {item.name}
      <br />
      price : {item.price}
    </div>
  );
}

export default memo(Child2);
