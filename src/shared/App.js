import React from 'react'

import {BrowserRouter, Route } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/configStore"

import Write from '../page/Write'
import Main from '../page/Main'
import Head from '../components/Head'
import { Grid, Button } from '../elements'
import Edit from '../page/Edit';




function App() {
  return (
    <React.Fragment>
      <Grid>
        <Head />
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/write" exact component={Write} />
          <Route path="/edit/:id" exact component={Edit} />
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;