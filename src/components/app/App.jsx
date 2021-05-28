import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState([init]);
  const [idx, setIdx] = useState(0);

  const record = (hex) => {
    setCurrent((prev) => [...prev, hex]);
    setIdx(current.length);

  };
 
  const undo = () => {
    setIdx(prevIdx => prevIdx - 1);
  };

  const redo = () => {
    setIdx(prevIdx => prevIdx + 1);
  };


  return { current, undo, redo, record, idx };
};

function App() {
  const { current, undo, redo, record, idx } = useRecord('#FF0000');
  
  return (
    <>
      <button disabled={idx === 0} onClick={undo}>undo</button>
      <button disabled={idx >= current.length - 1} onClick={redo}>redo</button>
      <input type="color" value={current[idx]} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current[idx], width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
