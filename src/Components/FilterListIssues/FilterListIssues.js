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
import Loading from '../Loading/Loading';
import ConnectionError from '../ConnectionError/ConnectionError';
import EmptyFilter from '../EmptyFilter/EmptyFilter';

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
  },
  media: {
    backgroundPosition: "left center",
    backgroundSize: "contain",
    height: 140,
    maxWidth: "100%",
  },
});

const FilterListIssues = ({search}) => {
  const classes = useStyles();
  const history = useHistory();
  const { data, loading, error } = UseFetch(`${ApiUrl}/issues/${TokenApiUrl}${FormatApiUrl}`);

  const singleComic = (id) => {
    history.push(`/comic/${id}`);
  }

  if ( loading )
    return <Loading />

  if ( error )
    return <ConnectionError />

  const filterComic = data.results.filter((data) => {
    return data.volume.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Fragment>
      <Container>
        <Grid container item xs={12}>
        {
          filterComic.length
          ?
            filterComic.map( ( item, index ) => {
              let dateAdded = item.date_added;
              let detailComic = item.api_detail_url;
              let comicId = detailComic.split('/');
                  comicId = comicId[5];

              return (
                <Grid item xs={12} key={index} onClick={() => singleComic(comicId)}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <Grid container>
                        <Grid item xs={3} sm={2} lg={1}>
                          <CardMedia
                            className={classes.media}
                            image={item.image.original_url}
                          />
                        </Grid>
                        <Grid item xs={9} sm={10} lg={11}>
                          <CardContent>
                            <Typography variant="h6">{item.volume.name} #{item.issue_number}</Typography>
                            <Typography><Moment format="MMM DD, YYYY">{dateAdded}</Moment></Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
          :
            <EmptyFilter message="There's not any comic with this name" />
        }
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterListIssues;