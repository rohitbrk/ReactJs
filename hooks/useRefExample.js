import { useRef } from "react";

// useRef can be used to reference elements.
// Unlike state variables, changes to a useRef object's current property do not trigger re-renders

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
