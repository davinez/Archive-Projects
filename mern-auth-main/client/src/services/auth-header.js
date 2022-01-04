// if we access protected resources from the 'API', the HTTP request needs Authorization header.

/*
 If there is a logged in user with accessToken (JWT), return HTTP Authorization header. 
 Otherwise, return an empty object.
*/
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
