import React from 'react';
import './App.css';
import HooksForm from './HooksForm';
import Hearts from './Hearts';

const App = () => {
  return (
    <React.Fragment>
      <div className="Content">
        <Hearts />
        <HooksForm />
      </div>  
    </React.Fragment>
  )
}

export default App;