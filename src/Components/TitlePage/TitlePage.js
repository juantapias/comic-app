import React, { Fragment } from 'react';
//Material components
import Typography from '@material-ui/core/Typography/Typography';

const TitlePage = ({title}) => {
  return (
    <Fragment>
      <Typography variant="h3" align="center">{title}</Typography>
    </Fragment>
  );
}

export default TitlePage;