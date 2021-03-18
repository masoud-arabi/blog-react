import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, deletePostAndFetch} from './actions/ActionPost';
import PostList from './components/PostList';
import {PostHeader} from '../Post/components/styled.components';
import Pagination from '../Post/components/Pagination';

class PostsContainer extends Component {
   state = {
       _limit: 5, _page: 1
   };

    componentDidMount(){
        this.fetchPosts();
    }

    get Filters(){
        const { _limit, _page} = this.state;
        return {_limit, _page};
    }

    fetchPosts = () => this.props.fetchPosts(this.Filters);
    
    onPageChange = newPage => this.setState({ _page: newPage }, this.fetchPosts);

    deletePosts = (id) => this.props.deletePostAndFetch(id, this.filters);

    render() { 
        const {posts, count} = this.props;
        const {_limit, _page} = this.state;
        const {onPageChange, deletePosts} = this;
        const pagination = <Pagination count={count} onPageChange={onPageChange} page={_page} limit={_limit}/>;
        return ( 
            <div>
                <PostHeader>
                    <h1>post</h1>
                </PostHeader>
                {pagination}
                    <PostList deletePost={deletePosts} posts={posts}/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

