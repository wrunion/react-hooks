import React from 'react';
import './App.css';
// import Counter from './Counter';
import Toggler from './Toggler';
import HooksForm from './HooksForm';

const App = () => {
  return (
    <React.Fragment>
      <div className="Content">
        {/* <Counter /> */}
        <Toggler />
        <HooksForm />
      </div>  
    </React.Fragment>
  )
}

export default App;