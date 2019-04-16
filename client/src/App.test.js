import React from 'react';
import { render, fireEvent } from "react-testing-library"
import App from './App';
import "jest-dom/extend-expect";

it('renders without crashing', () => {
  render(<App />);
});

describe("The baseball app", () => {
  describe("button functionality", () => {
    it("has a strike button that logs strikes", () => {
      const { getByText, getByTestId } = render(<App />);

      const button = getByText("Strike");

      fireEvent.click(button);
      const strikes = getByTestId("Strikes");

      expect(strikes).toHaveTextContent(/1 Strikes/i);   
    });

  });
});