import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

function CustomHooks() {
  const [data, setData] = useState("");
  const [input1, onInput1Submit] = useInput("", alert);
  const [input2, onInput2Submit] = useInput("", setData);

  // const [search, setSearch] = useState("");

  // const onChangeHandler = (e) => {
  //   setSearch(e.target.value);
  // };

  // const onClickHandler = () => {
  //   alert(search);
  //   setSearch("");
  // };

  return (
    <>
      <h1>CUSTOM HOOKS</h1>
      <input type="text" {...input1} />
      <button onClick={onInput1Submit}>submit</button>
      <br />
      <input type="text" {...input2} />
      <button onClick={onInput2Submit}>submit</button>
      {data}
    </>
  );
}

export default CustomHooks;
