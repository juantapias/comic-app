import React, { Fragment } from 'react';
//Material components
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  media: {
    backgroundPosition: "center center",
    backgroundSize: "contain",
    height: 510,
    marginTop: "10px",
    maxWidth: "100%",
  },
  p: {
    margin: "25px auto",
  },
})

const SingleCharacter = ({data}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="title-comic">{data.results.name}</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} lg={6}>
              <CardMedia
                className={classes.media}
                image={data.results.image.original_url}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Typography variant="h6" align="center">Appears in {data.results.count_of_issue_appearances} issues</Typography>
              <Typography className={classes.p} align="center">{data.results.deck}</Typography>
              <Typography variant="h4" align="center">{data.results.publisher.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default SingleCharacter;