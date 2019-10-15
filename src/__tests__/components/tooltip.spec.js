import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Tooltip from '../../components/tooltip';

describe('Tooltip component', () => {
  test('it renders the tooltip component', () => {
    const wrapper = shallow(<Tooltip />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
