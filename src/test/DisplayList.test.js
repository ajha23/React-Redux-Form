import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DisplayList from '../components/DisplayList';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

test("should render UserInput component", () => {
    const component = renderer.create(
        <DisplayList />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});