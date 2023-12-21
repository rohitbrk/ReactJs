// useCallback takes a callback function and a dependency array as arguments.
// It returns a memoized version of the callback function.
// The memoized function is only recreated if one of the dependencies in the array changes.

import { useState, useCallback } from "react";

function ParentComponen() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <ChildComponent handleIncrement={handleIncrement} />
    </div>
  );
}

function ChildComponent({ handleIncrement }) {
  console.log("child component rendered");

  return <button onClick={handleIncrement}>increment</button>;
}
