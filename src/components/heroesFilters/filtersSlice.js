import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook'

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
    activeClass: "all",
    filtersLoadingStatus: 'idle'
});

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/filters");
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterCharacters: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.activeClass = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => {state.filtersLoadingStatus = 'loading'})
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.filtersLoadingStatus = 'idle';
                filtersAdapter.setAll(state, action.payload);
            })
            .addCase(fetchFilters.rejected, state => {state.filtersLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = filtersSlice;

export const {selectAll} = filtersAdapter.getSelectors(state => state.filters);

export default reducer;

export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterCharacters
} = actions;