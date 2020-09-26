import React, { Fragment } from 'react';
import Moment from 'react-moment';
//Material components
import Card from '@material-ui/core/Card/Card';
import CardActionArea from '@material-ui/core/CardActionArea/CardActionArea';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography/Typography';
//Api resource
import UseFetch from '../../Hooks/UseFetch';
import ApiUrl from '../../Services/ApiUrl';
//App components
import Loading from '../../Components/Loading/Loading';

const useStyles = makeStyles({
  media: {
    backgroundSize: "cover",
    height: 240,
    maxWidth: "100%",
  },
});

const FilterGrid = () => {
  const classes = useStyles();
  const { data, loading } = UseFetch(`${ApiUrl}/issues/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json`);

  const singleComic = () => {
    console.log("single");
  }

  if ( loading )
    return <Loading />

  if ( data )
    return (
      <Fragment>
        <Container>
          <Grid container item xs={12} spacing={5}>
            { data &&
              data.results.map( ( item, index ) => {
                let name = Object.values(item.volume)[2];
                let thumbnail = Object.values(item.image)[1];
                let dateToFormat = item.date_added;
                return (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={index} onClick={singleComic}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={thumbnail}
                        />
                        <CardContent>
                          <Typography variant="h6" align="center">{name} #{item.issue_number}</Typography>
                          <Typography align="center"><Moment format="MMM DD, YYYY">{dateToFormat}</Moment></Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })
            }
          </Grid>
        </Container>
      </Fragment>
    );
}

export default FilterGrid;