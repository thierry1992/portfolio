import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/';
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from './components/Resume';
import Project from './components/Project';
import Blog from './components/Blog';



function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/project" component={Project}/>
      <Route path="/blog" component={Blog}/>
    </>  
    
    
  );
}

export default App;
