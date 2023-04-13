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

export const fetchOptions = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(optionsFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDelete = (id) => {
    return {
        type: 'HERO_DELETE',
        payload: id
    }
}

export const heroPost = (hero) => {
    return {
        type: 'HERO_POST',
        payload: hero
    }
}

export const optionsFetched = (options) => {
    return {
        type: 'OPTIONS_FETCHED',
        payload: options
    }
}

export const filterCharacters = (filter) => {
    return {
        type: 'CHARACTERS_FILTER',
        payload: filter
    }
}

export const setInputNameValue = (value) => ({
    type: 'SET_INPUT_NAME_VALUE',
    payload: value
  });

export const setInputDescValue = (value) => ({
    type: 'SET_INPUT_DESC_VALUE',
    payload: value
  });