import React, { Fragment, useContext } from 'react';
//Material box
import Box from '@material-ui/core/Box/Box';
//App components
import Header from '../../Components/Header/Header';
import TitlePage from '../../Components/TitlePage/TitlePage';
import FilterMenu from '../../Components/FilterMenu/FilterMenu';
import FilterGrid from '../../Components/FilterGrid/FilterGrid';
import FilterList from '../../Components/FilterList/FilterList';
import Footer from '../../Components/Footer/Footer';
//Global state
import FilterState from '../../Interfaces/Interfaces';

const Home = () => {
  const { filterList, search } = useContext(FilterState);

  return (
    <Fragment>
      <Box className="main">
        <Header />
        <TitlePage title="Comics Books" />
        <FilterMenu filter={filterList} />
        {
          filterList ? < FilterList search={search} /> : < FilterGrid search={search} />
        }
        <Footer />
      </Box>
    </Fragment>
  );
}

export default Home;