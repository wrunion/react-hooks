import React, { useState, useEffect } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);
  useEffect(() => { 
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <br />
      <button onClick={() => setCount(count + 1)} className="ui button basic green">Count</button>
    </div>
  )
}

export default Clicker;