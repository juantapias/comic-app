import React, { Fragment } from 'react';
//Material components
import Alert from '@material-ui/lab/Alert/Alert';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AdjustIcon from '@material-ui/icons/Adjust';

const useStyle = makeStyles({
  h4: {
    borderBottom: "1px solid #000",
    margin: "10px auto",
  },
  p: {
    alignItems: "center",
    display: "flex",
  },
  root: {
    marginRight: "5px",
  }
})

const Concepts = ({data}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={11} md={12}>
          <Typography variant="h4" className={classes.h4}>Concepts</Typography>
        </Grid>
        <Grid container>
        { !data.concept_credits.length
          ?
          <Grid item xs={12} sm={11} md={12}>
            <Alert variant="outlined" severity="info">No concepts to show</Alert>
          </Grid>
          :
          data.concept_credits.map( (item, index) => {
            return (
              <Grid item xs={6} key={index}>
                <Typography className={classes.p}><AdjustIcon fontSize="inherit" className={classes.root} /> {item.name}</Typography>
              </Grid>
            )
          })
        }
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default Concepts;