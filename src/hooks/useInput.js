import { useState } from "react";

export function useInput(initValue, submitAction) {
  const [search, setSearch] = useState(initValue);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    submitAction(search);
    setSearch("");
  };

  return [{ value: search, onChange: onChangeHandler }, onClickHandler];
}
