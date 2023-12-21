import { useMemo, useState } from "react";

const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}));

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(initialItems);

  // this expensive computation only runs if the items array change.
  // this will not run for every render.
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>selected item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
