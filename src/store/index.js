import { legacy_createStore as createStore, combineReducers, compose } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';
import inputs from '../reducers/inputs';

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);

    const oldDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action === "string") {
            return oldDispatch({
                type: action
            })
        } 
        
        return oldDispatch(action)
    }
    return store;
}

const store = createStore( 
    combineReducers({heroes, filters, inputs}), 
    compose(
        enhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;