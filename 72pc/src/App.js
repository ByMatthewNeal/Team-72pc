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

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/events" component={ Events } />
          <Route path="/news" component={ News } />
          <Route path="/team" component={ Team } />
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
