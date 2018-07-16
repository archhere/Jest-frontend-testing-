import Counter from './counter';
import { shallow } from 'enzyme';
import React from 'react';

describe('Counter',() => {
  it('starts with a count of 0',() => {
    let container = shallow(<Counter />);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });
});
