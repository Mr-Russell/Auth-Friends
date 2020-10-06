import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login.js'
import FriendsList from './components/FriendsList.js'
import PrivateRoute from './components/PrivateRoute.js'


function App() {
  return (
    <div className="App">
     <Switch>

      <Route path='/login'>
        <Login />
      </Route>

      <PrivateRoute component={FriendsList} />

     </Switch>
    </div>
  );
}

export default App;
