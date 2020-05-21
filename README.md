# Reeann Hansen React Demo

Application completed in React with the following features:

- Authentication with sign up and sign in forms leveraging HTML validations
- Small backend server to handle auth
- Routing with protected and public routes
- Functional components using hooks
- React Context to manage authentication state
- Animations and transitions
- A couple _very_ basic test cases

## Setup

1. Run `npm i`
2. Run `npm start`

Upon running `npm start`, the app will concurrently spin up the react app and a local express server, which will handle requests to `/signup` and `/signin`

## Notes

** If the email and password do not match the signup credentials, you will not be able to log in.
** The app uses both global styles and scss modules to avoid conflicting classnames.
\*\* There are small style discrepancies from the mock to help showcase some of my animation skills. In a professional scenario I would consult the PMs or designers beforehand.
