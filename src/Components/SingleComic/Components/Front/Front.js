import React, { Fragment } from 'react';
//Material components
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    backgroundPosition: "right center",
    backgroundSize: "contain",
    height: 510,
    maxWidth: "100%",
  },
});

const Front = ({data}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CardMedia
        className={classes.media}
        image={data.image.original_url}
      />
    </Fragment>
  );
}

export default Front;