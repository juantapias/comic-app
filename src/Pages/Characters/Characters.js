import React, { Fragment, useContext } from 'react';
//Material components
import Box from '@material-ui/core/Box/Box';
//App components
import Header from '../../Components/Header/Header';
import TitlePage from '../../Components/TitlePage/TitlePage';
import FilterMenu from '../../Components/FilterMenu/FilterMenu';
import FilterListCharacters from '../../Components/FilterListCharacters/FilterListCharacters';
import FilterGridCharacters from '../../Components/FilterGridCharacters/FilterGridCharacters';
import Footer from '../../Components/Footer/Footer';
//Global state
import FilterState from '../../Interfaces/Interfaces';

const Character = () => {
  const { filterList, search } = useContext(FilterState);

  return (
    <Fragment>
      <Box className="main">
      <Header />
        <TitlePage title="Characters" />
        <FilterMenu titleFilter="Characters" />
        {filterList ? <FilterListCharacters search={search} /> : <FilterGridCharacters search={search} />}
      <Footer />
      </Box>
    </Fragment>
  );
}

export default Character;