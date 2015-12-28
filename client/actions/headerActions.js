import {RESET_HEADER, SHOW_POSTDATA_IN_HEADER}  from '../constants/actionTypesPost';


export const resetHeader = () => {
    return {
        type : RESET_HEADER
    }
};

export const showPostDataInHeader = (postData) => {
    return {
        type : SHOW_POSTDATA_IN_HEADER,
        headerData : postData
    }
};
