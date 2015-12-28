import {
    SYSTEM_ERROR
} from '../constants/actionTypesPost';



export default (state = null, action) => {
    switch (action.type){
        case SYSTEM_ERROR:
            return action.error.toString();
        default:
            return state;
    }
}