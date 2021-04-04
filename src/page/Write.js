import React from 'react';
import WriteCard from '../components/WriteCard';
import {Grid, Text, Input, Button} from '../elements'


const Write = (props) => {

  return (
    <React.Fragment>
      <Grid margin="auto" bg="#EFF6FF">
        <Grid padding="15px 0px 20px 0px">
          <WriteCard />
        </Grid>
      </Grid>
      <Grid bg="#EFF6FF" height="41vh">
      </Grid>
    </React.Fragment>
  );
};

export default Write;