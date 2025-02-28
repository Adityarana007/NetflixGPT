import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        // To show and hide gpt search view
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
});

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;