import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import Team from './components/Team'
import CreateStory from './components/Create-News'



function App() {
  return (
    <>
    <Router>
      <div className="App">
        <div className='page-container'>
        <Navbar />
            <div className='content-wrap'>
            <Route path="/" exact component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/events" component={ Events } />
            <Route path="/news" component={ News } />
            <Route path="/team" component={ Team } />
            <Route path="/news/new" component={ CreateStory } />
            </div>
        <Footer />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
