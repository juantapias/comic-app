import React, { Fragment } from 'react';
import './Loading.css';
//Material components
import Box from '@material-ui/core/Box/Box';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const Loading = () => {
  return (
    <Fragment>
      <Box className="box-loading">
        <CircularProgress size={40} />
      </Box>
    </Fragment>
  );
}

export default Loading;