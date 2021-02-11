import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components

import { Friends } from './containers/Friends.jsx'

function App() {
  return (
    <Router>
      <Switch>
        {/* 全募集一覧ページ */}

        {/* フレンド募集一覧ページ */}
        <Route
          exact
          path="/friends"
        >
          <Friends />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;