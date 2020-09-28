import React, { Fragment } from 'react';
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
    backgroundPosition: "top center",
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
  const { data, loading, error } = UseFetch(`${ApiUrl}/characters/${TokenApiUrl}${FormatApiUrl}`);

  const singleComic = (id) => {
    history.push(`/character/${id}`);
  }

  if ( loading )
    return <Loading />

  if ( error )
    return <ConnectionError />

  const filterCharacters = data.results.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Fragment>
      <Container>
        <Grid container item xs={12} spacing={2}>
          {
            filterCharacters.length
            ?
            filterCharacters.map( ( item, index ) => {
              let detailCharacter = item.api_detail_url;
              let characterId = detailCharacter.split('/');
                  characterId = characterId[5];

              return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index} onClick={() => singleComic(characterId)}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image.original_url}
                      />
                      <CardContent className={classes.root}>
                        <Typography variant="subtitle1" align="center">{item.name}</Typography>
                        <Typography variant="caption">Appears in {item.count_of_issue_appearances} issues</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })
            :
              <EmptyFilter message="There's not any character with this name" />
          }
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterGridIssues;