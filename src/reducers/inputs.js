const initialState = {
    inputNameValue: '',
    inputDescValue: '',
}

const inputs = (state = initialState, action) => {
    switch (action.type) {
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

export default inputs;