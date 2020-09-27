import React, { Fragment } from 'react';
import './EmptyFilter.css';
//Material components
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import WarningIcon from '@material-ui/icons/Warning';

const ConnectionError = () => {
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Box className="box-empty-filter">
            <Grid item xs={12}>
              <Typography align="center"><WarningIcon fontSize="large" /></Typography>
              <Typography variant="h3" align="center">There's not any comic with this name</Typography>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default ConnectionError;