// You can use useState to manage any complex state variables

import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// useState() is used to declare a state variable count and its corresponding updater function setCount()
// When the button is clicked, the setCount() function is called with the new value of count which is count + 1
