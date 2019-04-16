import React from 'react';

import {render, cleanup} from 'react-testing-library';
import'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe("The Dashboard component", () => {
    it("contains a strike button", () => {
      const component = render(<Dashboard />);
      const button = component.getByTestId("Strike");
      expect(button).toHaveTextContent(/Strike/i);
    })
})

