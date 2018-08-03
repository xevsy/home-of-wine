import React, { Component } from 'react';
import Header from './Header'


class UserProfile extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <h1>User profile</h1>
        </div>
      </div>
    );
  }
}

export default UserProfile;
