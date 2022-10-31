import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import DisplayHome from './components/Home/DisplayHome';
import UserList from './components/Users/UserList/UserList';
import PlayerList from './components/Players/PlayerList/PlayerList';
import MyApps from './components/MyApps/MyApps';



function App() {
  return (
    <div className={styles.myContainer}>
      <BrowserRouter>
        {/*<DisplayHome />
        <UserList />
  <PlayerList />*/}
        <Route path='/' exact component={DisplayHome}></Route>
        <Route path='/myapps' component={MyApps}></Route>
        <Route path='/app5' component={PlayerList}></Route>
        <Route path='/app6' component={UserList}></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
