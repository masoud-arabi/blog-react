import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions/ActionPost';


class PostsContainer extends Component {
    state = { 
        posts: []
     };

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
        console.log(this.props);
        return ( 
            <div>yes</div>
            // <div> 
            //     {this.props.posts.map(post =>(
                    
            //             <p key={post.id}>{post.body}</p>
                    
            //     ))}
            // </div>
         );
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts,
        fetching: state.fetching,
        erroe: state.error,
    };
};

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

