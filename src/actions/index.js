

// export const fetchOptions = (request) => (dispatch) => {
//     dispatch(filtersFetching());
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }

export const setInputNameValue = (value) => ({
    type: 'SET_INPUT_NAME_VALUE',
    payload: value
  });

export const setInputDescValue = (value) => ({
    type: 'SET_INPUT_DESC_VALUE',
    payload: value
  });