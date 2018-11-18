
import {USER_LIST, USER} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case USER_LIST:
            console.log(action.payload.data)
            return action.payload.data;

        case USER:
        //return a key value pair 
        //where action.payload.data.userid is the key 
        //we add it into the overall state object
        //TODO: change from "id" to "userId"
            return { ...state, [action.payload.data.id]: action.payload.data}
            
    default:
        return state;
    }
}

