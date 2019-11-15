import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import {App} from  './index';
Enzyme.configure({ adapter: new Adapter() });

describe('Index', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});