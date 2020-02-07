import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders body text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/i am changed/i);
  expect(linkElement).toBeInTheDocument();
});

