import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../components/Form';

Enzyme.configure({ adapter: new Adapter() });

describe("Form", () => {
  it("should render Form component", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});