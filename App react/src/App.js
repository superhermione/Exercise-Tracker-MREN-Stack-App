import './App.css';
import React from 'react';
//import {MdDeleteForever} from 'react-icons/md';
import { GiRunningNinja } from 'react-icons/gi';
//import {MdOutlineModeEditOutline} from 'react-icons/md';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from 'react';

// import our three pages
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import Navigation from './components/nav.js'

function App() {
  const [exercise, setExercise] = useState([])
  return (
    <>
      <Router>
        <header>
          <h1>Ninja Fitness Tracker
            {<GiRunningNinja alt="goninjagogo"/> }
          </h1>
          <h2>Get fit tracking your goals!</h2>
        </header>

        <Navigation />
        
        <main>
          <article className="App-article">
            <Route path="/" exact><HomePage setExercise={setExercise}/></Route>
            <Route path="/add-exercise"><CreatePage /></Route>
            <Route path="/edit-exercise"><EditPage exercise={exercise} /></Route>
          </article>
        </main>

        <footer>
          <a href="https://github.com/superhermione" target="_blank" style={{ textDecoration: 'underline' }}>Open Sourced</a>
          <p>by Xinrui Hou</p>
        </footer>

      </Router>
    </>
  );
}

export default App;