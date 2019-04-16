import React from 'react';

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

it('renders without crashing', () => {
    render(<Display />);
});

describe("The Display component", () => {
    it("displays strikes", () => {
        const component = render(<Display strikes={2} balls={1} fouls={2}/>);
        const button = component.getByTestId("Strikes");
     
      })

})