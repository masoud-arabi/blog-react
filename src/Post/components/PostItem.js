import React from 'react';


const PostItem = ({post, deletePost}) =>{
    const onclickDelete = () =>{
        if(window.confirm('are you sure?')){
            deletePost(post.id);
        }
    };
   return( <div className="postitem">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <footer>
            <button onClick={onclickDelete}>
                delete
            </button>
        </footer>
    </div>)
};

export default PostItem;