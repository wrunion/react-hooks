import React from 'react';
import './App.css';
import Toggler from './Toggler';
import HooksForm from './HooksForm';
// import Movies from './starwarsComponents/Movies';

const App = () => {
  return (
    <React.Fragment>
      <div className="Content">
        <Toggler />
        <HooksForm />
        {/* <Movies /> */}
      </div>  
    </React.Fragment>
  )
}

export default App;