import React, { Fragment } from 'react';
import './ConnectionError.css';
//Material components
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import ErrorIcon from '@material-ui/icons/Error';

const ConnectionError = () => {
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Box className="box-connection-error">
            <Grid item xs={12}>
              <Typography align="center"><ErrorIcon fontSize="large" /></Typography>
              <Typography variant="h3" align="center">Connection Error</Typography>
              <Typography variant="h5" align="center">Unable to connect to the server.</Typography>
              <Typography variant="h5" align="center">Please try again later</Typography>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default ConnectionError;