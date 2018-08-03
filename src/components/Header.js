import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/auth';

const Header = () => (
  <div>
    <NavBar startLogin={startLogin()} startLogout={startLogout()} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);