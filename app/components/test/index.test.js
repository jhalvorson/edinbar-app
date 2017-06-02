import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import Test from './index';

describe('<Test />', () => {
  it('renders a "View"', () => {
    const wrapper = shallow(<Test />);
    expect(wrapper).to.have.type(View);
  });
});
