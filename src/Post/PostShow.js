import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class PostShow extends Component {

    render() { 
        if(!this.props.post){
            return <p>loading...</p>;
        }
        return (
            <div>
                <div className='post-item'>
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                </div>
                <Link to='/posts'>
                home
                </Link>
            </div>
        );
    }
}
 
function mapStateToProps(state, ownProps){
    const id = parseInt(ownProps.match.params.id, 10);
    const post = state.posts.find( p => p.id === id );
    return { post };
}
export default connect(mapStateToProps)(PostShow);