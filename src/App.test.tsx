import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders tabs page with blue selected', () => {
  render(<App />);
  const linkElement = screen.getByText(/supposed to be blue/i);
  expect(linkElement).toBeInTheDocument();
});
