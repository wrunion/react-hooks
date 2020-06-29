import React from 'react';
import useToggle from './../hooks/useToggle';

function Toggler() {

  // const [isHappy, setIsHappy] = useState(true);
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isBanana, toggleIsBanana] = useToggle(false);
  const [isYellowHeart, togggleIsYellowHeart] = useToggle(false);

  return(
    <React.Fragment>
      <h1>Click an emoji to see what happens!</h1>
        <h1 onClick={toggleIsHappy}>{isHappy ? "🙂" : "😢"}</h1>
        <h1 onClick={togggleIsYellowHeart}>{isYellowHeart ? "💛" : "🧡"}</h1>
        <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍓"}</h1>
    </React.Fragment>
  )
}

export default Toggler;

