import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="click to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
