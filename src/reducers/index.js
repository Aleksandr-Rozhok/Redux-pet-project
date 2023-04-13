const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filteredHeroes: [],
    activeClass: "all",
    inputNameValue: '',
    inputDescValue: '',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_POST':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                filteredHeroes: [...state.heroes, action.payload],
                heroesLoadingStatus: 'idle'
            }
        case 'OPTIONS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'CHARACTERS_FILTER':
            return {
                ...state,
                filteredHeroes: state.heroes.filter(item => item.element === action.payload),
                activeClass: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'SET_INPUT_NAME_VALUE':
            return {
                ...state,
                inputNameValue: action.payload
            }
        case 'SET_INPUT_DESC_VALUE':
            return {
                ...state,
                inputDescValue: action.payload
            }
        default: return state
    }
}

export default reducer;