import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import LeftMenu from '../components/LeftMenu';
import NavBar from '../components/NavBar';

export default function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <LeftMenu />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
