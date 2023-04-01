import React from 'react';
import {render, act} from '@testing-library/react-native'
import App from './App';

describe('App', () => {
    test('Renders correctly', async () => {

        const { getByTestId } = render( <App />);
    
        await act(async () => {
            const elm = getByTestId('app');
            expect(elm).toBeDefined();
        });
    });
});