const initialState = {
    activeClass: "all",
    filtersLoadingStatus: 'idle',
    filters: []
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'OPTIONS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'CHARACTERS_FILTER':
            return {
                ...state,
                activeClass: action.payload,
                filtersLoadingStatus: 'idle'
            }
        default: return state
    }
}

export default filters;