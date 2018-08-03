export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        uid: action.uid,
        displayName: action.displayName
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}
