/**
    * React Static Boilerplate
    * https://github.com/kriasoft/react-static-boilerplate
    *
    * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE.txt file in the root directory of this source tree.
    */

import { createStore } from 'redux';
import Immutable from 'immutable';

// Initial state
const initialState = Immutable.fromJS({
    busSearch: '',
    stopSearch: '',
    stops: [],
    bus: [],
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
        default:
            return state;
    }
});

export default store;
