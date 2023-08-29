import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CldSample from './CldSample';

describe('<CldSample />', () => {
  test('it should mount', () => {
    render(<CldSample />);
    
    const cldSample = screen.getByTestId('CldSample');

    expect(cldSample).toBeInTheDocument();
  });
});