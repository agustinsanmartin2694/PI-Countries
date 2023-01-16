import './App.css';
import React from "react"
import { Route } from 'react-router-dom';
import Activities  from './components/Activities/Activities';
import Landing from './components/Landing/Landing.jsx';
import  MainPage from'./components/MaingPage/MaingPage.jsx';
import CountryId from "./components/CountryId/CountryId"

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/countries" component={MainPage}/>
        <Route path ="/activities"component={Activities} />
        <Route exact path="/countries/:id" component={CountryId} />
    </div>
  );
}

export default App;
