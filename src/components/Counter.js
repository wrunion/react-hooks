import React, { useState } from 'react';

function CounterHooks() {

  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <h1>The Count Is: {count}</h1>
      <button 
        className="ui button green basic"
        onClick={() => setCount(count + 1)}>
        Add 1</button>
    </React.Fragment>
  )
}

export default CounterHooks;