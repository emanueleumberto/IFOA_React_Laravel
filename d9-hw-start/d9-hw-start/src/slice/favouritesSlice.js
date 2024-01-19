import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favourites: []
}; 

const favourites_slice = createSlice(
    {
        name: 'favourites',
        initialState: initialState,
        reducers: {
            addFavourite(state, action) {
                console.log(action)
                state.favourites.push(action.payload)
            },
            removeFavourite(state, action) {
                console.log(action)
                return {
                    ...state,
                    favourites: state.favourites.filter(f => f.company_name !== action.payload.company_name)
                }
            }
        }
    }
)

const { actions, reducer } = favourites_slice;
export const { addFavourite, removeFavourite } = actions;
export default reducer;