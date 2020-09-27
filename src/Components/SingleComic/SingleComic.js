import React, { Fragment } from 'react';
import './SingleComic.css'
//Material components
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
//App components
import Characters from './Components/Characters/Characters';
import Teams from './Components/Teams/Teams';
import Locations from './Components/Locations/Locations';
import Concepts from './Components/Concepts/Concepts';
import Persons from './Components/Persons/Persons';
import Front from './Components/Front/Front';

const SingleComic = ({data}) => {

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="title-comic">{ data.results.volume.name}#{data.results.issue_number}</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} lg={6} className="grid-content">
              <Characters data={data.results} />
              <Teams data={data.results} />
              <Locations data={data.results} />
              <Persons data={data.results} />
              <Concepts data={data.results} />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Front data={data.results} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}

export default SingleComic;