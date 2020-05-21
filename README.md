# Reeann Hansen React Demo

Application completed in React with the following features:

- Authentication with sign up and sign in forms leveraging HTML validations
- Small backend server to handle auth
- Routing with protected and public routes
- Functional components using hooks
- React Context to manage authentication state
- Responsive layout for iPad and mobile
- Animations and transitions
- A couple _very_ basic test cases

## Setup

1. Run `npm i`
2. Run `npm start`

Upon running `npm start`, the app will concurrently spin up the react app and a local express server, which will handle requests to `/signup` and `/signin`.

If the email and password do not match the signup credentials, you will not be able to log in.

## Notes

### Styling

- The app uses both global styles for animations and scss modules to avoid conflicting classnames and benefit from co-location.
- React Transition Group is used to track the component's mounting and unmounting status for more granular css animations.
- There are small style discrepancies from the mock to help showcase some of my animation skills. In a professional scenario I would consult the PMs or designers beforehand.

### Routing

- React router is used for routing history and separating protected routes from public routes
- React Transition Group and React Router are used together to create page transitions

### React Concepts

- The app makes use of the following hooks:
  - useState
  - useEffect
  - useMemo
  - useContext
  - React router hooks
- Context is used to handle and store the auth session. When the user's credentials are verified, UserContext is updated and any component consuming the context will be updated.

### Would love to add

- Unique page transitions for each device
- Finish macbook page
- Error notifications when email or password are incorrect
- More tests!
