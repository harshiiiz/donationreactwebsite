import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MyButton from './components/pages/Checkout';
import Home  from './components/pages/Home';
import './components/pages/checkout.css';
import Success from './components/pages/Success';
import Cancel from './components/pages/Cancel'


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      
       
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/Success'  component={Success}/>
        <Route path ='/checkout' component={MyButton}/>
        <Route path='/Cancel' component={Cancel}/>
      
        </Switch>
        
        
      </Router>
      </header>
    </div>
  );
}

export default App;
