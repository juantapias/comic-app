import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//Route component
import Routes from './Routes';
//Global state
import FilterState from './Interfaces/Interfaces';

const App = () => {
  const [ filterList, setFilterList ] = useState(true);
  const [ search, setSearch ] = useState("");

  return (
    <Fragment>
      <FilterState.Provider value={{filterList, setFilterList, search, setSearch}}>
        <Router>
          <Routes />
        </Router>
      </FilterState.Provider>
    </Fragment>
  );
}

export default App;