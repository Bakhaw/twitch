import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

const Home = lazy(() => import('../screens/Home'));
const LiveStream = lazy(() => import('../screens/LiveStream'));
const LiveStreams = lazy(() => import('../screens/LiveStreams'));
const TopGames = lazy(() => import('../screens/TopGames'));
const Video = lazy(() => import('../screens/Video'));
const Videos = lazy(() => import('../screens/Videos'));

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Suspense fallback={<Loader fullscreen />}>
          <Switch>
            <Route path='/videos/:userId/:videoId' component={Video} />
            <Route path='/videos/:userId' component={Videos} />
            <Route
              path='/directory/game/:gameId/channel/:userId'
              component={LiveStream}
            />
            <Route path='/directory/game/:gameId' component={LiveStreams} />
            <Route path='/directory' component={TopGames} />
            <Route path='/' component={Home} />
          </Switch>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default Router;
