import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/ActionPost';
import PostList from './components/PostList';

class PostsContainer extends Component {
   

     componentDidMount(){
        //  axios('http://localhost:3004/posts')
        //  .then(response => {
        //     this.setState({ posts:[...response.data] });
        //  })
        //  .catch(error => {
        //      console.log({ error });
        //  });
        this.props.fetchPosts();
     }

    render() { 
        const {posts} = this.props;
        return ( 
            <div> 
                <h1>post</h1>
                <PostList posts={posts}/>
            </div>
         );
    }
}

const mapStateToProps = ({ posts, fetching, error}) => ({
    posts,
    fetching,
    error,
});
const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

