import { useState } from 'react';

// return piece of state AND a function to toggle it
function useToggle(initialVal = false) {
  // call useState
  const [val, setVal] = useState(initialVal);

  const toggle = () => {
    setVal(!val);
  };
  return [val, toggle];
}

export default useToggle;