import React, { useState } from "react";
import { useInput } from "../hooks/useInput";

function CustomHooks() {
  // 훅과 관련되어서 반복되는 코드가 많을때
  // 그 반복되는 거를 통째로 커스텀훅으로 만든다. ->
  // 의미는 있겠죠? 서버에서 데이터를 받아온다. 인풋의 값을 submit, 로컬스토리지에서 데이터를 받아오고 저장한다.

  // 커스텀 훅 쓰기 전
  // const [inputValue, setInputValue] = useState("");
  // const onChangeHandler = (e) => setInputValue(e.target.value);
  // const onClickHandler = () => {
  //   alert(inputValue);
  //   setInputValue("");
  // };

  // 커스텀 훅 사용
  // const [input1, onChangeHandler, onClickHandler] = useInput(alert);
  // const [input2, onChangeHandler2 onClick] = useInput(setA);

  // 커스텀 훅으로 완전 줄여버리기~
  const [a, setA] = useState("");
  const [input1, onClickHandler] = useInput(alert);
  const [input2, onClick] = useInput(setA);

  return (
    <>
      <input type="text" {...input1} />
      <button onClick={onClickHandler}>submit</button>
      <br />
      <input type="text" {...input2} />
      <button onClick={onClick}>submit</button>
      {a}
    </>
  );
}

export default CustomHooks;
