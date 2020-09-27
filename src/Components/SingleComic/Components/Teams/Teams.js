import React, { Fragment } from 'react';
//Material components
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';

const Teams = ({data}) => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Teams</Typography>
        </Grid>
      {
        data.team_credits.map( (item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Typography>{item.name}</Typography>
            </Grid>
          )
        })
      }
      </Grid>
    </Fragment>
  )
}

export default Teams;