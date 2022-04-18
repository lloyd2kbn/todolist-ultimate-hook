import {
    TOGGLE_AUTH
} from './type'
import React from 'react'

function authReducer(state,action) {
    const {type} =action;
    switch (type) {
        case TOGGLE_AUTH:
            
            return !state;
        default:
            return state

    }
}

export default authReducer