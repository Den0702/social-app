# Brief description of the web-application 
This is a web-application project modelling behaviour of some features of a social media service (taking an example from _twitter_). It gives the possibility of creating an account[^1], browsing feed, liking posts, subscribing other users.

## Main features
- Signing user up and in
- Showing, adding and removing posts
- Adding and removing likes from posts
- Showing subscribing recommendations
- Subscribing and showing list of subscriptions
- Forms with validation
- Mobile-first design  
- Responsive layout

## Working [demo](https://den0702.github.io/social-app/)

## Technologies and tools used
- **React(v17.0.2)** for building the interface and behaviour of the application
- **_React-router-dom_** for navigating between components (app's main menu)
- The **_Axios_** library for creating HTTP-requests
- **_JSON Web Token_** (JWT) to allow performing operations that involve data exchange between the app and server and need authentication
- **_Local Storage_** to store JWT and signed user data
- **CSS** to style the user interface
- **_Font Awesome_** for setting infographics

## The way of signing in
The signing in process works only for predefined users:
> **_password_**: 1234   
**_possible user's names as login_**: artur, marek, adam, slawek, mietek, tomek, kasia, janek, piotrek

## References
[Akademia 108](https://akademia108.pl/) - API and documentation  
[Font Awesome](fontawesome.com) - Icons  
[Google Fonts](https://fonts.google.com/) - Fonts: Open Sans and Bellota


## App launch method
Run the following commands in the console in the root project's directory (which supports git commands):
``` 
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to see the working application in browser

[^1]: Users actually are not registered in the database but the API responds the way as if it's a real registration
