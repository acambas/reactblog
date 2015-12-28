import {SYSTEM_ERROR}  from '../constants/actionTypesPost';


export const systemError = (error) => {
    return {
        type : SYSTEM_ERROR,
        error
    }
};
