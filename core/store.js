import { createStore } from 'redux';
import Immutable from 'immutable';

// Initial state
const initialState = Immutable.fromJS({
    busSearch: '',
    stopSearch: '',
    stops: [
        { lat: -5.0855827, lng: -42.8034291, name:'A'},
        { lat: -5.0859867, lng: -42.8024221, name:'B'}
    ],
    loading: false
});

// Centralized application state
// For more information visit http://redux.js.org/
const store = createStore((state = initialState, action) => {

    switch(action.type){
        case 'BUS_SEARCH':
            return state.set('busSearch', action.text);
        case 'STOPS_SEARCH':
            return state.set('stopSearch', action.text);
        case 'REQUEST_BUS':
            return state.set('loading', true);
        case 'REQUEST_STOPS':
            return state.set('loading', true);
        case 'RECEIVE_BUS':
            return state.set('bus', action.data);
        case 'RECEIVE_STOPS':
            return state.set('stops', action.data);
        case 'SELECT_BUS':
            console.log(action);
            return state.set('stops', action.data.stops);
        default:
            return state;
    }
});

export default store;
