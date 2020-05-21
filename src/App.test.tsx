import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  const root = render(<App />);
  expect(root);
});

test('renders login view with two forms', () => {
  const { getAllByLabelText } = render(<App />);
  const formEl = getAllByLabelText('email');
  expect(formEl).toHaveLength(2);
});

test('redirects to login', () => {
  const history = createMemoryHistory();
  history.push('/weird');
  const { getAllByLabelText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const formEl = getAllByLabelText('email');
  expect(formEl).toHaveLength(2);
});
