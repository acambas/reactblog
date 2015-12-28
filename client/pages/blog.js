import React from 'react';
import BlogItem from '../components/blogItem/blogItem';
import * as postActions from '../actions/postsActions';
import {connect} from 'react-redux';

const createPostList = (posts) => {
    return posts.map(function(post){
        return <BlogItem key={post.id} {...post} />
    });
};

const mapStateToProps = (state) => {
    return {
        posts : state.app.blogPage.posts
    }
};

const mapDispatch = (dispatch) => {
    return {
        postsRequest : () => {
            dispatch(postActions.requestPosts())
        }
    }
};

const blogPage = React.createClass({
    componentDidMount:function(){
        const {posts, postsRequest} = this.props;
        if(!posts || posts.length === 0){
            postsRequest();
            console.log('eve me ')
        }
    },
    render: function(){
        const {posts} = this.props;

        return <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            {createPostList(posts)}
        </div>
    }
});


export default connect(mapStateToProps, mapDispatch)(blogPage)