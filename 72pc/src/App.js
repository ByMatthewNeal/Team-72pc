import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About'
import Events from './components/Events'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import Team from './components/Team'
import CreateStory from './components/Create-News'
import Story from './components/Story'




function App() {
  return (
    
      <div className="App">
        <div className='page-container'>
        <Navbar />
            <div className='content-wrap'>
              <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/events" component={ Events } />
                <Route path="/news/:id" component={ Story } /> 
                <Route exact path="/news" component={ News } /> 
                <Route path="/team" component={ Team } />
                <Route path="/news/new" component={ CreateStory } />
              </Switch>
            </div>
        <Footer />
        </div>
      </div>
    
  );
}

export default App;
