import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Privateroute from './components/Privateroute'
import Home from './pages/Home'
function App() {

  return (
    <switch>
<Route path='/signin'>
<SignIn/>
</Route>
<Privateroute path='/'>
  <Home />
</Privateroute>
    </switch>
  )
}

export default App
