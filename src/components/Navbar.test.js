import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Navbar from  './Navbar';
Enzyme.configure({ adapter: new Adapter() });

describe('Navbar', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});