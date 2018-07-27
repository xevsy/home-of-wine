import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header'

class FrontPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <img src={"/wine-main.jpg"} width={"100%"}/>
        </p>
      </div>
    );
  }
}

export default FrontPage;
