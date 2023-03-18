import { useState } from "react";

export function useInput(submitAction) {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (e) => setInputValue(e.target.value);
  const onClickHandler = () => {
    submitAction(inputValue);
    setInputValue("");
  };
  // 줄이기 전
  // return [ inputValue, onChangeHandler, onClickHandler];
  return [{ value: inputValue, onChange: onChangeHandler }, onClickHandler];
}
