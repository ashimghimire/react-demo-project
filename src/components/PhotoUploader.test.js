import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import PhotoUploader from  './PhotoUploader';
Enzyme.configure({ adapter: new Adapter() });

describe('PhotoUploader', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PhotoUploader />);
  });

  it('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});