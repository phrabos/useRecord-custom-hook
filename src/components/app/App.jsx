import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState([init]);
  const [idx, setIdx] = useState(0);

  const record = (hex) => {
    setCurrent((prev) => [...prev, hex]);
    setIdx(current.length);
  };
 
  const undo = () => {
    if(idx > 0) setIdx(prevIdx => prevIdx - 1);
  };

  const redo = () => {
    if(idx < current.length - 1) setIdx(prevIdx => prevIdx + 1);
  };


  return { current, undo, redo, record, idx };
};

function App() {
  const { current, undo, redo, record, idx } = useRecord('#FF0000');
  
  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current[idx]} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current[idx], width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
