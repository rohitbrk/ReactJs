import React, { useState } from 'react';

function App() {
  const [presents, setPresents] = useState([
    {
      btn: [
        {
          btn: [
            { btn: [{ btn: 'you lost :(' }, { btn: 'you lost :(' }] },
            { btn: 'you lost :(' },
            { btn: [{ btn: 'you lost :(' }] },
            { btn: 'hurray ! you won' },
          ],
        },
        { btn: 'you lost :(' },
      ],
    },
    { btn: 'you lost :(' },
    { btn: 'you lost :(' },
  ]);

  const clickHandler = (idx) => {
    setPresents((prev) => prev[idx].btn);
  };
  
  return (
    <div>
      <h2>Open presents and find the right one</h2>
      {typeof presents == 'string' ? (
        <h3>{presents}</h3>
      ) : (
        presents.map((item, idx) => (
          <button key={idx} onClick={() => clickHandler(idx)}>
            Present
          </button>
        ))
      )}
    </div>
  );
}
