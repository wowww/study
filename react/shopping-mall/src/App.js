import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { DataProvider } from './components/Context/Context';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
