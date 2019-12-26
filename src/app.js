import React, { Component } from 'react';

import Board from './components/board/board';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
