import React, { Fragment } from 'react';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
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
import TokenApiUrl from '../../Services/TokenApiUrl';
import FormatApiUrl from '../../Services/FormatApiUrl';
//App components
import Loading from '../../Components/Loading/Loading';

const useStyles = makeStyles({
  media: {
    backgroundPosition: "left center",
    backgroundSize: "contain",
    height: 160,
    maxWidth: "100%",
  },
});

const FilterList = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data, loading } = UseFetch(`${ApiUrl}/issues/${TokenApiUrl}${FormatApiUrl}`);

  const singleComic = (id) => {
    history.push(`/comic/${id}`);
  }

  if ( loading )
    return <Loading />

  return (
    <Fragment>
      <Container>
        <Grid container item xs={12} spacing={2}>
        {
          data.results.map( ( item, index ) => {
            let name = Object.values(item.volume)[2];
            let thumbnail = Object.values(item.image)[1];
            let dateAdded = item.date_added;
            let detailComic = item.api_detail_url;
            let comicId = detailComic.split('/');
                comicId = comicId[5];

            return (
              <Grid item xs={12} key={index} onClick={() => singleComic(comicId)}>
                <Card>
                  <CardActionArea>
                    <Grid container>
                      <Grid item xs={6} sm={2}>
                        <CardMedia
                          className={classes.media}
                          image={thumbnail}
                        />
                      </Grid>
                      <Grid item xs={6} sm={10}>
                        <CardContent>
                          <Typography variant="h6">{name} #{item.issue_number}</Typography>
                          <Typography><Moment format="MMM DD, YYYY">{dateAdded}</Moment></Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
        }
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterList;