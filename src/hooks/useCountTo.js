import { useState } from 'react';

export default function useCountTo(startingNum = 0) { 
  const [num, setNum] = useState(startingNum);

  const setCount = () => {
    if (num >= 4) {
      setNum(0);
    } else if ((num >= 0) && (num < 4)) {
    setNum(num + 1);
    }
  };
  return [num, setCount];
}