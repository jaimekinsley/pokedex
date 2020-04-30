import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

test('renders the header', () => {
    const wrapper = shallow(<Header name="some name"/>)
    
    expect(wrapper).toMatchSnapshot();
})

