import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import Streams from '../screens/Streams';
import TopGames from '../screens/TopGames';
import NavBar from '../components/NavBar';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/directory/game/:gameId' component={Streams} />
          <Route path='/directory' component={TopGames} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;