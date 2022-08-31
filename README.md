# Description of web-application 
This is a project of the web-application modelling the behaviour of social media (taking an example from twitter). It allows to _sign_ user _up_ and _in_[^1], _show_, _add_ and _remove_ posts from feed, _add_ and _remove_ likes, gives the possibility of _subscribing_ other users.

## Working [demo](https://den0702.github.io/social-app/)
## Technologies and tools used
- **React** for building the interface and behaviour of the application
- **_React-router-dom_** for navigating between components (app's main menu)
- The **_Axios_** library for creating HTTP-requests
- **_Local Storage_** to store signed user data
- **_JSON Web Token_** to allow performing operations that involve data exchange between the app and server and need authentication
- **CSS** to style the user interface
- **_Font Awesome_** for setting infographics

## The way of signing in
The signing in process works only for predefined users:
> **_password_**: 1234   
**_possible user's names as login_**: artur, marek, adam, slawek, mietek, tomek, kasia, janek, piotrek

## References
[Akademia 108](https://akademia108.pl/) - API and documentation

## App launch method
In the root project directory run the following commands in the console (which supports git commands):
``` 
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to see the working application in browser

[^1]: Users are not registered in the database but the API responds the way as if it's a real registration
