import React, { useState, useMemo } from 'react';

function Qiymat(n) {
  if (n <= 1) return n;C
  return Qiymat(n - 1) + Qiymat(n - 2);
}

function App() {
  const [number, setNumber] = useState(10);
  const [otherState, setOtherState] = useState(false);

  const value = useMemo(() => {
    console.log('Qiymat hisoblanmoqda...');
    return Qiymat(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>qiymat:  {value}</p>
      <button onClick={() => setOtherState(!otherState)}>
        Boshqa state ozgartirish
      </button>
    </div>
  );
}

export default App;
