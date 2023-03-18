import { Suspense } from "react";
import CustomHooks from "./components/CustomHooks";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      {/* <Parent>
        <div>child</div>
      </Parent> */}
      {/* <Suspense fallback={<div>...loading</div>}>
        <Parent />
      </Suspense> */}
      <CustomHooks />
    </div>
  );
}

export default App;
