import React from 'react';
import {render, waitFor} from '@testing-library/react-native'
import Favorites from './Favorites';
import StoreContext from "../../context/store";
 

describe('Favorites', () => {
    test('Renders correctly', async () => {

        const appContext = { favorites: [] };

        const { getByTestId } = render(
            <StoreContext.Provider value={appContext}>
                <Favorites/>
            </StoreContext.Provider>
        );
        
        await waitFor(()=>{
            const elm = getByTestId('favorites');
            expect(elm).toBeDefined();
        })
    });
});