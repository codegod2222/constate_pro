import * as React from "react";
import createContainer from "constate";

function useCounter({ initialCount = 0 } = {}) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

const MainCounter = createContainer(useCounter, value => [value.count]);

function IncrementButton() {
  const { increment } = React.useContext(MainCounter.Context);
  return <button onClick={increment}>+</button>;
}

function Count() {
  const { count } = React.useContext(MainCounter.Context);
  return <span>{count}</span>;
}

function App() {
  return (
    <MainCounter.Provider initialCount={10}>
      <Count />
      <IncrementButton />
    </MainCounter.Provider>
  );
}

export default App;
