import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="header">GitHub Profiles</div>
        <Card />
      </>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here...</div>
          <div className="Company">Company here...</div>
        </div>
      </div>
    );
  }
}

export default App;
