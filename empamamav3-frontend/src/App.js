import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Switch>
        <Route path={'/about'}>
          <About/>
        </Route>
        <Route path={'/menu'}>
          <Menu/>
        </Route>
        <Route path={'/contact'}>
          <Contact/>
        </Route>
        <Route path={'/'}>
          <Home/>
        </Route>
      </Switch>
      <About/>
    </div>
  );
}

export default App;