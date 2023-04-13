import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeClass: "all",
    filtersLoadingStatus: 'idle',
    filters: []
}

const heroesSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {state.filtersLoadingStatus = 'loading'},
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
        filtersFetchingError: state => {state.filtersLoadingStatus = 'error'},
        filterCharacters: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.activeClass = action.payload;
        },
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterCharacters
} = actions;