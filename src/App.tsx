import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './UserContext';
import AppRoutes from './routes/Routes';
import './assets/styles/App.scss';

// the app uses context to handle the state of authentication in addition to storing
// the user's credentials in a session

// the session persists if they close their tab with sessionStorage
// and we are insecurely "registering" a user via localStorage

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
