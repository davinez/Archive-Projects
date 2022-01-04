import React from 'react';
import { withRouter } from 'react-router-dom';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  /* 
We use a callback in props.history.listen() for listening every Route changes
*/
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <div></div>;
};

// HoC 'withRouter' to get acces to history object’s, i.e. props can access the history object’s properties and functions.
export default withRouter(AuthVerify);
