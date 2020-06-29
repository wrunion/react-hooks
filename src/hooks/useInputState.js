import { useState } from 'react';

function useInputState(initialVal) {
  const [val, setVal] = useState(initialVal);
  const handleChange = (e) => {
    setVal(e.target.value);
  }
  const reset = () => {
    setVal("");
  }
  return [val, handleChange, reset];
}

export default useInputState;