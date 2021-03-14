import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/ActionPost';
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


    render() { 
        const {posts, count} = this.props;
        const {_limit, _page} = this.state;
        const {onPageChange} = this;
        const pagination = <Pagination count={count} onPageChange={onPageChange} page={_page} limit={_limit}/>;
        return ( 
            <div>
                <PostHeader>
                    <h1>post</h1>
                </PostHeader>
                {pagination}
                    <PostList posts={posts}/>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

