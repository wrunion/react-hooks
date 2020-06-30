import React from 'react';
import useCountTo from './../hooks/useCountTo';

const Hearts = () => {

  const heartArray = ["❤️", "💛", "💚", 
  "💙", "💜"];
  const emotionArray =["😀", "😊", "😍", "🤓", "😛"];
  const weatherArray = ["🌨", "☀️", "🌦", "🌧", "⛈"];
 

  const [heartCount, increaseHeartCount] = useCountTo(0);
  const [emotionCount, increaseEmotionCount] = useCountTo(0);
  const [weatherCount, increaseWeatherCount] = useCountTo(0);


  return (
    <>
      <h1>Click an emoji to see what happens!</h1>
      <h1 onClick={increaseWeatherCount}>{weatherArray[weatherCount]}</h1>
      <h1 onClick={increaseHeartCount}>{heartArray[heartCount]}</h1>
      <h1 onClick={increaseEmotionCount} >{emotionArray[emotionCount]}</h1>
    </>
  );
}

export default Hearts;