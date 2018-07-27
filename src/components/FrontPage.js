import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import { ButtonToolbar, Button, Image } from 'react-bootstrap';

class FrontPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ButtonToolbar>
          <Button bsStyle="info" block>Test</Button>
        </ButtonToolbar>
        <p className="App-intro">
          <Image src={"/wine-main.jpg"} width={"100%"} alt={"Main image"} />
        </p>
      </div>
    );
  }
}

export default FrontPage;
