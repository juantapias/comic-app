import React, { Fragment, useContext } from 'react';
//App components
import FilterMenu from '../../Components/FilterMenu/FilterMenu';
import FilterGrid from '../../Components/FilterGrid/FilterGrid';
import FilterList from '../../Components/FilterList/FilterList';
//Global state
import FilterState from '../../Interfaces/Interfaces';

const Home = () => {
  const { filterList } = useContext(FilterState);

  return (
    <Fragment>
      <FilterMenu filter={filterList} />
      {
        filterList ? < FilterList /> : < FilterGrid />
      }

    </Fragment>
  );
}

export default Home;