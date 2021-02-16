import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import firebase from './Firebase';

// components

import Auth from './Auth';

import { Friends } from './containers/Friends.jsx'

function App() {
  return (
    <Router>
      <Switch>
        {/* 登録・ログイン */}
        <Route exact path="/signin" component={SignInOrUp} />
        <Route exact path="/signup" component={SignUp} />
        
        {/* 全募集一覧ページ */}

        {/* フレンド募集一覧ページ */}
        <Auth>
          <Route
            exact
            path="/friends"
          >
            <Friends />
          </Route>
        </Auth>
      </Switch>
    </Router>
  );
}

export default App;