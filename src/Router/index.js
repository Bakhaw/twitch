import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import LiveStream from '../screens/LiveStream';
import LiveStreams from '../screens/LiveStreams';
import TopGames from '../screens/TopGames';
import Videos from '../screens/Videos';
import NavBar from '../components/NavBar';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/videos/:userId' component={Videos} />
          <Route
            path='/directory/game/:gameId/channel/:userId'
            component={LiveStream}
          />
          <Route path='/directory/game/:gameId' component={LiveStreams} />
          <Route path='/directory' component={TopGames} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
