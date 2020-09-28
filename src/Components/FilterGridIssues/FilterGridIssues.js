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

const useStyles = makeStyles((theme) => ({
  media: {
    backgroundSize: "cover",
    height: 330,
    maxWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      height: 380
    },
  },
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: 90,
    justifyContent: "center"
  }
}));

const FilterGridIssues = ({search}) => {
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
        <Grid container item xs={12} spacing={2}>
          {
            filterComic.length
            ?
            filterComic.map( ( item, index ) => {
              let dateToFormat = item.date_added;
              let detailComic = item.api_detail_url;
              let comicId = detailComic.split('/');
                  comicId = comicId[5];

              return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index} onClick={() => singleComic(comicId)}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image.original_url}
                      />
                      <CardContent className={classes.root}>
                        <Typography variant="subtitle1" align="center">{item.volume.name} #{item.issue_number}</Typography>
                        <Typography variant="caption" align="center"><Moment format="MMM DD, YYYY">{dateToFormat}</Moment></Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })
            :
              <EmptyFilter message="There's not any comic with this name" />
          }
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterGridIssues;