import React, { Fragment } from 'react';
import './App.css';
//App components
import FilterMenu from './Components/FilterMenu/FilterMenu';
import FilterGrid from './Components/FilterGrid/FilterGrid';
import FilterList from './Components/FilterList/FilterList';

const App = () => {
  return (
    <Fragment>
      <FilterMenu />
      <FilterGrid />
      <FilterList />
    </Fragment>
  )
}

export default App;
