import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_SUCCESS
} from '../constants/actionTypesPost';



const initialBlogState = {
    posts:[]
};

export default (state = initialBlogState, action) => {
    switch (action.type){
        case LOAD_POSTS_SUCCESS:
            return Object.assign({}, {posts:action.posts});
        default:
            return state;
    }
}