import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInput from '../components/UserInput';

Enzyme.configure({ adapter: new Adapter() });

describe("UserInput", () => {
  it("should render UserInput component", () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});