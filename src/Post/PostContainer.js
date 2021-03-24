import React,{Component, useState} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePostAndFetch, editPostAndFetch} from './actions/ActionPost';
import PostList from './components/PostList';
import {PostHeader} from '../Post/components/styled.components';
import Pagination from '../Post/components/Pagination';

class PostsContainer extends Component {
   state = {_page: 1, _limit: 5 };


    componentDidMount() {
        this.fetchPosts();
    }

    get Filters(){
        const { _limit, _page} = this.state;
        return {_page, _limit};
    }

    fetchPosts = () => this.props.fetchPosts(this.Filters);
    
    onPageChange = newPage => this.setState({ _page: newPage }, this.fetchPosts);

    deletePosts = (id) => this.props.deletePostAndFetch(id, this.filters);

    editPost = (postObject) => this.props.editPostAndFetch(postObject, this.filters);

    

    render() { 
        const {posts, count} = this.props;
        const {_limit, _page} = this.state;
        const {onPageChange, deletePosts, editPost} = this;
        const pagination = <Pagination count={count} onPageChange={onPageChange} _page={_page} _limit={_limit}/>;
        return ( 
            <div>
                <PostHeader>
                    <h1>post</h1>
                </PostHeader>
                {pagination}
                    <PostList deletePost={deletePosts} editPost={editPost} posts={posts}/>
                {pagination}
            </div>
         );
    }
}

const mapStateToProps = ({ posts, fetching, error, count}) => ({
    posts,
    count,
    fetching,
    error,
});
const mapDispatchToProps = {
    fetchPosts,
    deletePostAndFetch,
    editPostAndFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

