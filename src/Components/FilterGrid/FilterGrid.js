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
    backgroundSize: "cover",
    height: 330,
    maxWidth: "100%",
  },
});

const FilterGrid = () => {
  const classes = useStyles();
  const history = useHistory();
  const { data, loading } = UseFetch(`${ApiUrl}/issues/${TokenApiUrl}${FormatApiUrl}`);

  const singleComic = (id) => {
    history.push(`/comic/${id}`);
  }

  if ( loading )
    return <Loading />

  if ( data )
    return (
      <Fragment>
        <Container>
          <Grid container item xs={12} spacing={2}>
            {
              data.results.map( ( item, index ) => {
                let name = Object.values(item.volume)[2];
                let thumbnail = Object.values(item.image)[1];
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