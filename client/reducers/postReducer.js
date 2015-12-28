import {
    LOAD_POSTS_REQUEST,
    LOAD_SINGLE_POSTS_REQUEST,
    LOAD_SINGLE_POSTS_SUCCESS
} from '../constants/actionTypesPost';





const initialBlogState = {
    post:undefined
};

export default (state = initialBlogState, action) => {
    switch (action.type){
        case LOAD_SINGLE_POSTS_SUCCESS:
            return Object.assign({}, {post:action.postData});
        default:
            return state;
    }
}