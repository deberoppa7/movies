import React from 'react';
import {render} from '@testing-library/react-native'
import Text from './Text';

describe('Text UI', () => {
    test('renders correctly', () => {
        const { getByText } = render(<Text>hello Text</Text>);
        const elm = getByText('hello Text');
        expect(elm).toBeDefined();
    });
});