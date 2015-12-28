import axios from 'axios';
import {LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_SINGLE_POSTS_REQUEST, LOAD_SINGLE_POSTS_FAILURE, LOAD_SINGLE_POSTS_SUCCESS}
from '../constants/actionTypesPost';
import * as headerActions from './headerActions';
import * as utilActions from './utilActions';

export const requestPosts = () => {
        return (dispatch) => {
            axios.get('/api/post').then((response) => {
                dispatch(requestPostsSuccess(response.data));
            });
        };
};

export const requestPostsSuccess = (posts) => {
    return{
        type:LOAD_POSTS_SUCCESS,
        posts
    }
};



export const loadPostPage = (postId) => {
    return (dispatch) => {
        axios.get('/api/post/id/' + postId).then((response) => {
            if(response.status === 200){
                dispatch(finishLoadingPostPage(response.data));
                dispatch(headerActions.showPostDataInHeader(response.data));
            }else{
                throw 'there was an issue'
            }
        });
    }
};

export const finishLoadingPostPage = (postData) => {
    return {
        type: LOAD_SINGLE_POSTS_SUCCESS,
        postData
    }
};

