import React from 'react';
import { render } from '../../test/test-utils';
import { HeroDetail } from './HeroDetail';

describe('<HeroDetail />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<HeroDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});
