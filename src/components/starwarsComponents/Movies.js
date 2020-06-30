import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
  const [num, setNum] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://swapi.dev/api/films/${num}/`);
      setMovie(response.data);
    }
    getData();
  }, [num])
  // USEEFFECT RUNS AFTER EVERY RENDER 
  //EXCEPT WHEN YOU SPECIFY OTHERWISE IN THE SECOND ARGUMENT (YOU CAN CHOOSE WHEN IT UPDATES)

  return (
    <React.Fragment>
      <h1>Pick A Star Wars Movie</h1>
      <h3>You picked: <em>{movie.title}</em></h3>
      <p><em>{movie.opening_crawl}</em></p>
      <select value={num} onChange={(e) => setNum(e.target.value)} >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </React.Fragment>
  )
}

export default Movies;