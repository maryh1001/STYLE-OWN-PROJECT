# Welcome to CoderConnect
This social media site was designed with coders in mind. Creating a profile is free and easy; users showcase their best projects on their CoderConnect profile via a connection to their GitHub account. Users display a bio, which contains information on what area of programming interests them, the coding languages in which they are proficient, and any other relevant programmer info, such as how many times they had to console.log() `Hello World!` before they could get a job.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Components
This project is broken up into the components listed below. These React components all come together in the App.js file inside a function that correctly routes the user to the corresponding page.


### `Login/Sign Up Page`
A simple page to prompt the user to log in or create an account to use CoderConnect.


### `Home Feed`
This page displays what other CoderConnect users are posting. Users stay updated on what their connections are up to, new trends in tech, what companies have the best wfh policies, etc. This is a future feature as the code needs some tweaks.


### `Profile Page`
This is where users can shine by listing their most impressive projects/apps they have built. They describe what draws them to tech, what sort of programming they do or are interested in, and what coding languages they use. Putting a bio and listing skills, accomplishments, and major projects can result in employers reaching out to the users as well. This community is built on collaboration and innovation, as well as networking. The hope is to unite and inspire those who program for work and fun.


### `Navigation`
This navigation bar is listed just below the Browser Router component in the App function so that it will display at the top of the browser. A user interacts with it to toggle between the Login/Sign Up page, Home Feed, and Profile Page.


### `Error 404`
If the user types in anything but the correct route for the above components, an Error 404 message will display, complete with an HTTP cat image.


Completed authentication api where we can:

- login users
- register
- get web tokens
- protect routes
- get currently logged in user data

## Dependencies
Frontend:
-"@reduxjs/toolkit": "^1.8.3",
-"@testing-library/jest-dom": "^5.16.4",
-"@testing-library/react": "^13.3.0",
-"@testing-library/user-event": "^14.3.0",
-"axios": "^0.27.2",
-"react": "^18.2.0",
-"react-dom": "^18.2.0",
-"react-icons": "^4.4.0",
-"react-modal": "^3.15.1",
-"react-redux": "^8.0.2",
-"react-router-dom": "^6.3.0",
-"react-scripts": "5.0.1",
-"react-toastify": "^9.0.7",
-"web-vitals": "^2.1.4"
  

Backend:
-"@testing-library/jest-dom": "^5.16.4",
-"@testing-library/react": "^13.3.0",
-"@testing-library/user-event": "^13.5.0",
-"bcryptjs": "^2.4.3",
-"colors": "^1.4.0",
-"concurrently": "^7.3.0",
-"dotenv": "^16.0.1",
-"express": "^4.18.1",
-"express-async-handler": "^1.2.0",
-"jsonwebtoken": "^8.5.1",
-"mongoose": "^6.4.4",
-"react": "^18.2.0",
-"react-dom": "^18.2.0",
-"react-scripts": "5.0.1",
-"web-vitals": "^2.1.4"


## Routes

| Method | Path                | Purpose                                        |
| :----- | :------------------ | :--------------------------------------------- |
| GET    | `/`                 | Home Page                                      |
| GET    | `/login`            | Login Page                                     |
| POST   | `/register`         | Register                                       |
| GET    | `/profile`          | User Profiles                                  |
| GET    | `/profile/:id`      | My Profile                                     |
| DELETE | `/____/`            |                                                |
| GET    | `*`                 | 404 page (matches any route not defined above) |

#### To be implemented:
| GET    | `/forum/`           | Access forum                                   |
| GET    | `/forum/:id`        | Access specific forum post                     |
| PUT    | `/forum/:id`        | Edit specific forum post                       |
| DELETE | `/forum/:id/delete` | Delete Post                                    |
| POST   | `/forum/:id/post`   | Post on forum                                  |


## Future Implementation
The brainiacs at CoderConnect have a vision of a fully functional home feed that shows posts from users asking for coding help, posting programmer memes, job updates, and other statuses. The profiles need further personalization that grabs user data from a database, and the CSS also needs some spicing up. Other than that, this is a great base app for creative programmers to connect, share, and grow as a community.  