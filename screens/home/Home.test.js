import React from 'react';
import {render, waitFor} from '@testing-library/react-native'
import Home from './Home';
import StoreContext from "../../context/store";
 

describe('Home', () => {
    test('Renders correctly', async () => {

        const appContext = { favorites: [] };

        const { getByTestId } = render(
            <StoreContext.Provider value={appContext}>
                <Home/>
            </StoreContext.Provider>
        );
        
        await waitFor(()=>{
            const elm = getByTestId('home');
            expect(elm).toBeDefined();
        })
    });
});