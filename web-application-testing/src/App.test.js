import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from "./components/Dashboard";
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test("Buttons are rendering", () => {
  const{ getByText } = render(<Dashboard/>);

  getByText(/strike/i);
  getByText(/ball/i);
  getByText(/hit/i);
  getByText(/foul/i);
})