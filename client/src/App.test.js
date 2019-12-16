import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


test("renders without crashing", () => {
  render(<App />);
});

test("displays toggle function", () => {
  const { getByTestId } = render(<App />);

  console.log(getByTestId("toggle"));

  getByTestId("toggle");

});