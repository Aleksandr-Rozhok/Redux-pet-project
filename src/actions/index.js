import {heroesFetching, heroesFetched, heroesFetchingError} from '../components/heroesList/heroesSlice';
import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filtersSlice';

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const deleteChar = (request, id) => async (dispatch) => {
    dispatch(heroesFetching());
    await request(`http://localhost:3001/heroes/${id}`, "DELETE");
    dispatch(fetchHeroes(request))
}

export const addChar = (request, data) => async (dispatch) => {
    dispatch(heroesFetching());
    await request('http://localhost:3001/heroes', "POST", data);
    dispatch(fetchHeroes(request))
}

export const fetchOptions = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}


// export const filterCharacters = (filter) => {
//     return {
//         type: 'CHARACTERS_FILTER',
//         payload: filter
//     }
// }

export const setInputNameValue = (value) => ({
    type: 'SET_INPUT_NAME_VALUE',
    payload: value
  });

export const setInputDescValue = (value) => ({
    type: 'SET_INPUT_DESC_VALUE',
    payload: value
  });