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

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
  },
  media: {
    backgroundPosition: "right top",
    backgroundSize: "cover",
    height: 190,
    maxWidth: "100%",
  },
});

const FilterListCharacters = ({search}) => {
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
        <Grid container item xs={12}>
        {
          filterCharacters.length
          ?
          filterCharacters.map( ( item, index ) => {
            let detailCharacter = item.api_detail_url;
            let characterId = detailCharacter.split('/');
                characterId = characterId[5];

            return(
              <Grid item xs={12} key={index} onClick={() => singleComic(characterId)}>
              <Card className={classes.card}>
                <CardActionArea>
                  <Grid container>
                  <Grid item xs={5} sm={3} lg={2}>
                    <CardMedia
                      className={classes.media}
                      image={item.image.original_url}
                    />
                  </Grid>
                    <Grid item xs={7} sm={9} lg={10}>
                      <CardContent>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="caption">Appears in {item.count_of_issue_appearances} issues</Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </Grid>
            )
          })
          :
            <EmptyFilter message="There's not any character with this name" />
        }
        </Grid>
      </Container>
    </Fragment>
  );
}

export default FilterListCharacters;