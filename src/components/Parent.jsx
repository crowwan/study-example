import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent({ children }) {
  const [count, setCount] = useState(0);

  // 함수가 어떤 데이터를 리턴하는데 내부 계산이 진짜 오래걸린다.
  function foo() {
    // 시간이 오래 걸리는 작업
    return "a";
  }
  // useMemo => 값을 기억
  // useCallback => 함수를 기억
  const needMemo = useMemo(() => foo(), []);
  // 함수를 재사용하기 위해서 쓴다.
  // 프롭스에 넘길때 이전 함수를 넘기면서 상위 컴포넌트가 렌더링 되어도 자식이 렌더링되지 않게 만드는 용도로 쓴거다.

  const onClickHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <Child onClickHandler={setCount} />
      <Child2 item={needMemo} />
      {children}
    </div>
  );
}

// 컴포넌트가 렌더링이 되는 경우
// 프롭스 바뀌는 경우
// 상태가 바뀌는 경우

export default Parent;

// useCallback은 함수 생성을 막는 것이 아니라 새로운 함수와 이전 함수 중 어떤 것을 리턴할 것인지 고르는 것이다.
