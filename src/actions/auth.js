import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName) => ({
  type: 'LOGIN',
  uid,
  displayName
});

const startLogin = () => {
  return() => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

const startLogout = () => {
  return() => {
    return firebase.auth().signOut();
  }
}

export { startLogin, startLogout }