import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Button from '@material-ui/core/Button';
import { startLogin, startLogout } from '../actions/auth';

class LoginPage extends Component {
  handleClick = (e) => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Button onClick={startLogin()}>Login</Button>
          <Button onClick={startLogout()}>Logout</Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);