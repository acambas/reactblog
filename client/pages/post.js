import React from 'react';
import Post from '../components/post/post';
import {connect} from 'react-redux';
import * as postActions from '../actions/postsActions';
import * as headerActions from '../actions/headerActions';

const mapStateToProps = (state) => {
    return {
        post : state.app.postPage.post
    }
};

const mapDispatch = (dispatch) => {
    return {
        loadPostPage : (postId) => {
            dispatch(postActions.loadPostPage(postId));
        },
        headerReset:() => {
            dispatch(headerActions.resetHeader());
        }
    }
};

const page = React.createClass({
    componentWillMount: function(){
        this.props.loadPostPage(this.props.params.id);
    },
    render: function(){
        if(this.props.post){
            return <Post {...this.props.post} />
        }else{
            return <strong>Loading data ...</strong>
        }
    },
    componentWillUnmount:function(){
        this.props.headerReset();
    }
});


export default connect(mapStateToProps, mapDispatch)(page)

