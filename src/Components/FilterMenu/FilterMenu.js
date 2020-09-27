import React, { Fragment, useContext } from 'react';
import './FilterMenu.css';
//Material components
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
//MaterialIcon components
import GridOnIcon from '@material-ui/icons/GridOn';
import ViewListIcon from '@material-ui/icons/ViewList';
//Global state
import FilterState from '../../Interfaces/Interfaces';

const FilterList = () => {
  const { filterList, setFilterList } = useContext(FilterState);

  const handleFilterMenu = () => {
    if (filterList) {
      setFilterList(false);
    } else {
      setFilterList(true);
    }
  }

  return (
    <Fragment>
      <Container className="container-filter-list">
        <Grid container item xs={12} className="grid-filter-list">
          <Grid item xs={6} lg={6}>
            <Typography>Latest Issues</Typography>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Box display="flex" justifyContent="flex-end">
              <Typography className="item-filter" onClick={handleFilterMenu}><ViewListIcon /> List</Typography>
              <Typography className="item-filter" onClick={handleFilterMenu}><GridOnIcon /> Grid</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterList;