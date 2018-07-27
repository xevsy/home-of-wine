import React from 'react'
import Header from './Header'

const NotFoundPage = () => (
  <div className="App">
    <Header />
    <p className="App-intro">
      <img src={"/error-page.jpg"} width={"100%"}/>
    </p>
  </div>
);

export default NotFoundPage;
