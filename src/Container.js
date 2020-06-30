import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function container() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography component="div" style={{height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}