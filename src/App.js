import React, { Component } from 'react';
import ContactForm from './containers/ContactForm/ContactForm'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ContactForm /> 
      </div>
    );
  }
}

export default App;
