import CustomHooks from "./components/CustomHooks";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <Parent>
        <div>children</div>
      </Parent>
      <CustomHooks />
    </div>
  );
}

export default App;
