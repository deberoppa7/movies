import React from 'react';
import {render, fireEvent} from '@testing-library/react-native'
import Button from './Button';

describe('Button UI', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Button label="Press me" />);
        const elm = getByText('Press me');
        expect(elm).toBeDefined();
    });
  
    test('calls onPress function when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<Button label="Press me" onPress={onPressMock} />);
        const elm = getByText('Press me');
        fireEvent.press(elm);
        expect(onPressMock).toHaveBeenCalledTimes(1);
    });
});