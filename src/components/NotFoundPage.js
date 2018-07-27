import React from 'react'
import Header from './Header'
import { Image } from 'react-bootstrap'

const NotFoundPage = () => (
  <div className="App">
    <Header />
    <p className="App-intro">
      <Image src={"/error-page.jpg"} width={"100%"} alt={"Not found image"} />
    </p>
  </div>
);

export default NotFoundPage;
